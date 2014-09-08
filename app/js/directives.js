(function(document, angular) {
  'use strict';

  var furyApp = angular.module('furyApp.directives', []);

  furyApp.directive('fixedPanel', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        angular.element($window).bind('scroll', function () {

          var elementInViewport = function (el) {
            var rect = elem.getBoundingClientRect();

            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= ($window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= ($window.innerWidth || document.documentElement.clientWidth)
            );
          };


          if(!elementInViewport(elem)) {
            elem.addClass('fixed');
          }
        });
      }
    };
  }]);

  furyApp.directive('equals', function() {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, elem, attrs, ngModel) {
        if(!ngModel) {
          return;
        }

        // watch own value and re-validate on change
        scope.$watch(attrs.ngModel, function() {
          validate();
        });

        attrs.$observe('equals', function (val) {
          validate();
        });

        var validate = function() {
          var val1 = ngModel.$viewValue;
          var val2 = attrs.equals;
          ngModel.$setValidity('equals', val1 === val2);
        };
      }
    };
  });
})(document, angular);

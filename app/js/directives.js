(function(document, angular) {
  'use strict';

  var furyApp = angular.module('furyApp.directives.fixedPanel', []);

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
})(document, angular);

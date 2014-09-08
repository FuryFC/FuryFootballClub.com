(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.shop', []);

  furyApp.controller('ShopController', ['$scope', function($scope) {
    $scope.items = (function () {
      return [{ description: 'Winter Session 1', price: 100},
              { description: 'Winter Session 2', price: 100},
              { description: 'Winter Session 3', price: 100},
              { description: 'Winter Session 4', price: 100},
              { description: 'Winter Session 5', price: 100},
              { description: 'Winter Session 6', price: 100}];
    })();
  }]);

})(angular);

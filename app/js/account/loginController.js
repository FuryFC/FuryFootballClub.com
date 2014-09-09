(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.account.login', []);

  furyApp.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.account = {
      email: '',
      password: ''
    };

    $scope.login = function () {
      // TODO: Validate Account
      // TODO: Redirect to Profile

      $location.path('/account')
    };
  }]);

})(angular);

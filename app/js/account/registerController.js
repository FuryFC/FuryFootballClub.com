(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.account.registration', []);

  furyApp.controller('RegisterController', ['$scope', '$location', function($scope, $location) {
    $scope.account = {
      firstName : '',
      lastName : '',
      email: '',
      password: ''
    };

    $scope.create = function () {
      // TODO: Validate Account
      // TODO: Create Account
      // TODO: Redirect to Profile

      $location.path('/account')
    };
  }]);

})(angular);

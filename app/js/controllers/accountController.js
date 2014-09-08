(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.account', []);

  furyApp.controller('AccountController', ['$scope', function($scope) {
    $scope.account = {
      firstName : '',
      lastName : '',
      address : '',
      apt : '',
      city : '',
      state : '',
      zip : undefined,
      dateOfBirth : undefined
    }

    $scope.create = function () {
      // TODO: Validate Account
      // TODO: Create Account
      // TODO: Redirect to Profile

      alert('creating account.');
    }

    function validate(account) {
      
    }
  }]);

})(angular);

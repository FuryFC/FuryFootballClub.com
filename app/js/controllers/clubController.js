(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.club', []);

  furyApp.controller('ClubController', ['$scope', function($scope) {
    $scope.aboutText = "Welcome to the show";
  }]);

})(angular);

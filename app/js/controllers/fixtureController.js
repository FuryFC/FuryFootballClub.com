(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.fixtures', []);

  furyApp.controller('FixtureController', ['$scope', function($scope) {

    $scope.fixtures = [
      { date: '04-01', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' },
      { date: '04-08', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' },
      { date: '04-15', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' },
      { date: '04-22', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' },
      { date: '04-29', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' },
      { date: '05-06', opponentInitial: 'KLFC', furyScore: '-', opponentScore: '-' }
    ];
  }]);

})(angular);

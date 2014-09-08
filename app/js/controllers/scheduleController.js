(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.schedule', []);

  furyApp.controller('ScheduleController', ['$scope', function($scope) {

    $scope.schedule =  [
                        {
                          id: 'April2014', text: 'April 2014', matches:
                          [
                            { date: '04-01', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '04-08', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '04-15', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '04-22', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '04-29', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' }
                          ]
                        },
                        {
                          id: 'May2014', text: 'May 2014', matches:
                          [
                            { date: '05-06', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '05-13', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '05-20', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' },
                            { date: '05-27', home: 'KLFC', away: 'Fury FC', homeScore: '-', awayScore: '-', location: 'Vadnais Heights' }
                          ]
                        }
                      ];

    $scope.matchMonths = [{id: 'April2014', text: 'April 2014'}, {id: 'May2014', text: 'May 2014'}, {id: 'June2014', text: 'June 2014'}];
  }]);

})(angular);

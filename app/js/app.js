(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp', [
    'ngRoute',
    'furyApp.featured',
    'furyApp.fixtures',
    'furyApp.directives.fixedPanel'
  ]);

  furyApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.jade'});
    $routeProvider.when('/schedule', {templateUrl: 'partials/schedule.jade', controller: 'FixtureController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})(angular);

(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp', [
    'ngRoute',
    'furyApp.featured',
    'furyApp.fixtures'
  ]);

  furyApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.jade'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})(angular);

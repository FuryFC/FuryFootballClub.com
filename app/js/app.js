(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp', [
    'ngRoute',
    'ui.directives',
    'furyApp.account',
    'furyApp.club',
    'furyApp.featured',
    'furyApp.fixtures',
    'furyApp.schedule',
    'furyApp.directives',
    'furyApp.filters'
  ]);

  furyApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/club', {templateUrl: 'partials/club.jade', controller: 'ClubController'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.jade'});
    $routeProvider.when('/schedule', {templateUrl: 'partials/schedule.jade', controller: 'ScheduleController'});
    $routeProvider.when('/join', {templateUrl: 'partials/join.jade', controller: 'RegisterController'});
    $routeProvider.when('/login', {templateUrl: 'partials/login.jade', controller: 'LoginController'});
    $routeProvider.when('/shop', {templateUrl: 'partials/shop.jade', controller: 'ShopController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})(angular);

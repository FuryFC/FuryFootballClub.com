(function(angular) {
  'use strict';


  // Declare app level module which depends on filters, and services
  angular.module('furyApp', [
    //'ngRoute',
    'furyApp.filters',
    //'furyApp.services',
    //'furyApp.directives',
    'furyApp.featured',
    'furyApp.fixtures'
  ]);

  //config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/', {templateUrl: 'views/partials/featured.jade', controller: 'FeaturedController'});
    //$routeProvider.otherwise({redirectTo: '/view1'});
  //}]);

})(angular);

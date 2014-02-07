(function(angular) {
  'use strict';

  angular.module('furyApp.filters', []).
    filter('interpolate', ['version', function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }]);
})(angular);
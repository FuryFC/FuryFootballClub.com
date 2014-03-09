(function(angular) {
  'use strict';

  var furyApp = angular.module('furyApp.featured', []);

  furyApp.controller('FeaturedController', ['$scope', function($scope) {

    var recentNews = [
        {
          headLine: 'Neque porro quisquam est 1',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        },
        {
          headLine: 'Neque porro quisquam est 2',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        },
        {
          headLine: 'Neque porro quisquam est 3',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        },
        {
          headLine: 'Neque porro quisquam est 4',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        },
        {
          headLine: 'Neque porro quisquam est 5',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        },
        {
          headLine: 'Neque porro quisquam est 6',
          img: 'img/team.jpg',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus, ipsum a feugiat tincidunt, arcu turpis egestas risus, quis convallis ligula tortor a turpis. Cras vel dolor in mauris blandit.',
          url: '#Test'
        }
      ];

    $scope.featuredNews = recentNews[0];
    $scope.recentNews = recentNews;
  }]);

})(angular);

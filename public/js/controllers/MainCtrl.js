var app = angular.module('MainCtrl', ['ui.router']);

app.controller('MainController',['$scope', 'beer' ,'beerPromise', function($scope, beer, beerPromise) {
  $scope.beers = beerPromise;
}]);

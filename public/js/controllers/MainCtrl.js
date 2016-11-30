var app = angular.module('MainCtrl', ['ui.router']);

app.controller('MainController',['$scope', 'beer' ,'beerPromise', 'auth', function($scope, beer, beerPromise, auth) {
  $scope.beers = beerPromise;
  $scope.auth = auth.isLoggedIn;
}]);

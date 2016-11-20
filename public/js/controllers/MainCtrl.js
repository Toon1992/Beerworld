var app = angular.module('MainCtrl', ['ui.router']);

app.controller('MainController',['$scope', 'beer', function($scope, beer) {
    $scope.beers = beer.beers;
}]);

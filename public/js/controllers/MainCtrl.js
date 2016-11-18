var app = angular.module('MainCtrl', []);

app.controller('MainController',['$scope', 'beer', function($scope, beer) {
    $scope.beers = beer;
}]);

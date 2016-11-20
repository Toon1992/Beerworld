var app = angular.module('BeerCtrl', ['ui.router']);

app.controller('BeerController',['$scope', '$stateParams', 'beer',
  function($scope, $stateParams, beer) {
    $scope.beer = beer.beers[$stateParams.id];
    //$scope.tagline = 'Nothing beats a pocket protector!';
}]);

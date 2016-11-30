var app = angular.module('HeaderDirective', []);

app.controller('MyHeaderController', ['$scope', function($scope){
  $scope.title = "Beerworld!";
  $scope.description ="Welkom op beerworld waar men bieren kan ontdekken en beoordelen.";
}])
.directive('myHeader', function(){
  return {
    restrict: 'E',
    templateUrl: '/views/my-header.html'
  };
});

var app = angular.module('BeerCtrl', ['ui.router']);

app.controller('BeerController',['$scope', '$stateParams', 'beer',
  function($scope, $stateParams, beer) {
    $scope.data = {
      model:null,
      ratings:[
        {id: '1', name:'1'},
        {id: '2', name:'2'},
        {id: '3', name:'3'},
        {id: '4', name:'4'},
        {id: '5', name:'5'},
        {id: '6', name:'6'},
        {id: '7', name:'7'},
        {id: '8', name:'8'},
        {id: '9', name:'9'},
        {id: '10', name:'10'}
      ]
    };

    var chosenbeer = beer.beers[$stateParams.id];
    $scope.beer = chosenbeer;
    $scope.reviews = chosenbeer.reviews;

    $scope.addReview = function(){
      $scope.reviews.push({
        name:"Hannes",
        rating:$scope.data.model,
        subject:$scope.subject,
        description:$scope.description
      });
      $scope.subject = '';
      $scope.description ='';
    }
}]);

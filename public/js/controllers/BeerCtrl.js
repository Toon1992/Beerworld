var app = angular.module('BeerCtrl', ['ui.router']);

app.controller('BeerController',['$scope', 'chosenBeer', 'beer','auth',
  function($scope, chosenBeer, beer, auth) {
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

    $scope.beer = chosenBeer;
    $scope.reviews = chosenBeer.reviews;
    $scope.isLoggedIn = auth.isLoggedIn;

    $scope.addReview = function(){
      beer.addReview(chosenBeer._id,{
          name: auth.currentUser(),
          rating:$scope.data.model,
          subject:$scope.subject,
          description:$scope.description
      }).success(function(comment){
        $scope.beer.reviews.push(comment);
      });
      $scope.subject = '';
      $scope.description ='';
    }
}]);

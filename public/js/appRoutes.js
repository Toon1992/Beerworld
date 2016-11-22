angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
 function($stateProvider, $urlRouterProvider) {

    $stateProvider
        // home page
        .state('home', {
            url:'/home',
            templateUrl: 'views/home.html',
            controller: 'MainController',
            resolve:{
              beerPromise:['beer', function(beer){
                 return beer.getAll().then(function(data){
                  return data;
                });
              }]
            }
        })
        .state('beers', {
            url: '/beer/{id}',
            templateUrl: 'views/beer.html',
            controller: 'BeerController'
        });

  $urlRouterProvider.otherwise("/home");
}]);

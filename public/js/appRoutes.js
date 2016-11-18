angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/beer', {
            templateUrl: 'views/beer.html',
            controller: 'BeerController'
        });

    $locationProvider.html5Mode(true);

}]);

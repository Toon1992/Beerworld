angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // home page
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'MainController',
                resolve: {
                    beerPromise: ['beer', function(beer) {
                        return beer.getAll().then(function(data) {
                            return data;
                        });
                    }]
                }
            })
            .state('beers', {
                url: '/beer/{id}',
                templateUrl: 'views/beer.html',
                controller: 'BeerController',
                resolve: {
                    chosenBeer: ['$stateParams', 'beer', function($stateParams, beer) {
                        return beer.get($stateParams.id);
                    }]
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'AuthController',
                onEnter: ['$state', 'auth', function($state, auth) {
                    if (auth.isLoggedIn()) {
                        $state.go('home');
                    }
                }]
            })
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'AuthController',
                onEnter: ['$state', 'auth', function($state, auth) {
                    if (auth.isLoggedIn()) {
                        $state.go('home');
                    }
                }]
            });


        $urlRouterProvider.otherwise("/home");
    }
]);

angular.module('BeerService', []).factory('Beer', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/beer');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(beerData) {
            return $http.post('/api/beer', beerData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/beer/' + id);
        }
    }

}]);
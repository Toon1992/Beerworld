var app = angular.module('BeerService', ['ui.router']);

app.factory('beer', ['$http', 'auth', function($http, auth){
  var o = {beers:[]};
    o.getAll = function(){
      return $http.get('/beers').then(function(data){
        return data.data;
      });
    };

    o.get = function(id){
      return $http.get('/beers/' + id).then(function(res){
        return res.data;
      })
    }

    o.addReview = function(id, review){
      return $http.post('/beers/' + id + '/reviews', review, {
        headers: {Authorization: 'Bearer ' + auth.getToken()}
      });
    }

  return o;
}]);


// // angular.module('BeerWorld', []).factory('BeerService', ['$http', function($http) {
// //   let getBeers = () =>{
// //     return $http.get('/api/beer');
// //   }
//
//     // return {
//     //     // call to get all nerds
//     //     get : function() {
//     //         return $http.get('/api/beer');
//     //     }
//     //
//     //     //         // these will work when more API routes are defined on the Node side of things
//     //     // // call to POST and create a new nerd
//     //     // create : function(beerData) {
//     //     //     return $http.post('/api/beer', beerData);
//     //     // },
//     //     //
//     //     // // call to DELETE a nerd
//     //     // delete : function(id) {
//     //     //     return $http.delete('/api/beer/' + id);
//     //     // }
//     // }
//
//     return {
//       getBeers: getBeers
//     }
// }]);

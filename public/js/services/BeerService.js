var app = angular.module('BeerService', []);

app.factory('beer', ['$http', function($http){
  var o = {
    beers:[{
      name : "Duvel",
      brewery : "Moortgat",
      percentage: 8.9,
      image: "Duvel",
      taste: "blabla",
      hop: "blabla",
      color: "Blond",
      rating: "8",
      description:"Lekker lekker lekker"
    }]
  };

  return o;
}])


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

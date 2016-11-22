var app = angular.module('BeerService', ['ui.router']);

app.factory('beer', ['$http', function($http){
  var o = {beers:[]};
    // beers:[{
    //   name : "Duvel",
    //   brewery : "Moortgat",
    //   percentage: 8.9,
    //   image: "http://www.duvelmoortgat.be/sites/default/files/duvel_packshot.png",
    //   taste: "blabla",
    //   hop: "blabla",
    //   color: "Blond",
    //   rating: "8",
    //   description:"Lekker lekker lekker",
    //   reviews:[{
    //     name:"Toon",
    //     rating:"9",
    //     subject:"Awesome beer",
    //     description:"Wat een geweldig biertje is me dit"
    //   },{
    //     name:"Hannes",
    //     rating:"5",
    //     subject:"Slecht dag gehad na een duvel",
    //     description:"gans de dag moeten kotsen van dit bier"
    //   }]
    // },{
    //   name : "Duvel",
    //   brewery : "Moortgat",
    //   percentage: 8.9,
    //   image: "http://www.duvelmoortgat.be/sites/default/files/duvel_packshot.png",
    //   taste: "blabla",
    //   hop: "blabla",
    //   color: "Blond",
    //   rating: "8",
    //   description:"Lekker lekker lekker"
    // }]
  //};
  o.getAll = function(){
    return $http.get('/beers').then(function(data){
      return data.data;
    });
  };

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

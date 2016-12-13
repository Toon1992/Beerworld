var app = angular.module('ProfileService', ['ui.router']);

app.factory('profile', ['$http', 'auth', function($http, auth){
  var profile = {};
  profile.getUser = function(){
    return $http.get("/profile").then(function(data){
      return data.data;
    });
  };

  profile.updateProfile = function(profile){
    return $http.post('/profile', profile);
  };

  return profile;
}]);

var app = angular.module('ProfileCtrl', ['ui.router']);

app.controller('ProfileController',['$scope', 'auth', 'profile', 'profilePromise',
  function($scope, auth, profile, profilePromise) {
    var userList = profilePromise;
    var loggedUser = auth.currentUser();
    var user;
    userList.forEach(function(u){
      if(u.user === loggedUser){
        user = u;
      }
    });

    $scope.voornaam = user.firstName;
    $scope.achternaam = user.lastName;
    $scope.email = user.email;

    if(user.firstName === null){
      $scope.isVoornaamNull = true;
    } else {
      $scope.isVoornaamNull = false;
    }

    // $scope.isVoornaamNull = function(){
    //   var b = typeof user.firstName === 'undefined' || user.firstName === null;
    //   return b;
    // };

    $scope.isAchternaamNull = function(){
      return typeof user.lastName === 'undefined' || user.lastName === null;
    };

    $scope.isEmailNull = function(){
      return typeof user.email === 'undefined' || user.email === null;
    };

    $scope.veranderVoornaam = function(){
        $scope.isVoornaamNull = true;
    };

    $scope.updateProfile = function(){
      profile.updateProfile({
        firstName: $scope.voornaam,
        lastName: $scope.achternaam,
        email: $scope.email,
        user: auth.currentUser()
      }).success(function(prof){
        $scope.voornaam = prof.voornaam;
        $scope.achternaam = prof.achternaam;
        $scope.email = prof.email;
      });

      $scope.isVoornaamNull = false;
    };

  }]);

'use strict';

angular.module('nashvestnServerApp')
  .controller('AdminCtrl', ['$scope', 'Donee', '$http', function($scope, Donee, $http) {

    // Use the User $resource to fetch all users

    Donee.find().success(function(donees){
      $scope.donees = donees;
    });

    $http.get('/api/users/me', function(user){
      console.log(user);
      $scope.admin = user;
    });
  }]);

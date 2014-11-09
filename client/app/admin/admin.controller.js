'use strict';

angular.module('nashvestnServerApp')
  .controller('AdminCtrl', ['$scope', 'Donee', function($scope, Donee) {

    // Use the User $resource to fetch all users

    Donee.find().success(function(donees){
      $scope.donees = donees;
    });

    // $scope.delete = function(user) {
    //   User.remove({ id: user._id });
    //   angular.forEach($scope.users, function(u, i) {
    //     if (u === user) {
    //       $scope.users.splice(i, 1);
    //     }
    //   });
    // };
  }]);

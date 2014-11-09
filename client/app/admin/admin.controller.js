'use strict';

angular.module('nashvestnServerApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users

    $scope.donees = [
     { name: 'Clark'},
     { name: 'Roger'},
     { name: 'Sally'},
     { name: 'Bob'},
     { name: 'Bette'}
    ];

    $scope.data = [
     { name: "Clark", donations: 45},
     { name: "Roger", donations: 98},
     { name: "Sally", donations: 76},
     { name: "Bob", donations: 40},
     { name: "Bette", donations: 98}
    ];


    // $scope.delete = function(user) {
    //   User.remove({ id: user._id });
    //   angular.forEach($scope.users, function(u, i) {
    //     if (u === user) {
    //       $scope.users.splice(i, 1);
    //     }
    //   });
    // };
  });

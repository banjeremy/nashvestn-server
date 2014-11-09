'use strict';

angular.module('nashvestnServerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewDonee/:id?', {
        templateUrl: 'app/viewDonee/viewDonee.html',
        controller: 'ViewdoneeCtrl'
      });
  });

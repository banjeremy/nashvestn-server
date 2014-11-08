'use strict';

angular.module('nashvestnServerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewDonee', {
        templateUrl: 'app/viewDonee/viewDonee.html',
        controller: 'ViewdoneeCtrl'
      });
  });

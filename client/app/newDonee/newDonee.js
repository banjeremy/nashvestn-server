'use strict';

angular.module('nashvestnServerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newDonee', {
        templateUrl: 'app/newDonee/newDonee.html',
        controller: 'NewdoneeCtrl'
      });
  });

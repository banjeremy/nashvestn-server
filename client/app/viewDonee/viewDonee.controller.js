'use strict';

angular.module('nashvestnServerApp')
  .controller('ViewdoneeCtrl', ['$scope', function ($scope) {
    $scope.message = 'Hello';

    $scope.data = [
      {name: "Greg", score: 98},
      {name: "Ari", score: 96},
      {name: 'Q', score: 75},
      {name: "Loser", score: 48}
    ];
  }]);

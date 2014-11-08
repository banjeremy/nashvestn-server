'use strict';

angular.module('nashvestnServerApp')
  .controller('NewdoneeCtrl', ['$scope', '$upload', function ($scope, $upload) {
    $scope.donee = {};

    $scope.add = function(){
        addDonee($scope.donee, $scope.file).then(function(response){
          $scope.donee = response.data.donee;
        });
    };

    $scope.onFileSelect = function($files){
      $scope.file = $files;
    };

    function addDonee(donee, file){
      // if no file submitted, file is null
      var file = file ? file[0] : null;
      return $upload.upload({
        url: '/api/donees',
        method: 'POST',
        withCredentials: true,
        data: {donee: donee},
        file: file,
        fileName: 'photo.jpg'
      });
    }

  }]);

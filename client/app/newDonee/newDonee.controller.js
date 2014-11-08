'use strict';

angular.module('nashvestnServerApp')
  .controller('NewdoneeCtrl', ['$scope', '$upload', function ($scope, $upload) {
    $scope.donee = {};

    $scope.add = function(){
        addDonee($scope.donee, $scope.file).then(function(response){
          console.log('response in $scope.add>>>>>', response);
          $scope.donee = response.data.donee;
        });
    };

    $scope.onFileSelect = function($file){
      console.log('$file in $scope.onFileSelect>>>>>', $file);
      $scope.file = $file;
    };

    function addDonee(donee, file){
      console.log('donee in function addDonee>>>>>', donee);
      console.log('file in function addDonee>>>>>', file);
      // if no file submitted, file is null
      var file = file ? file[0] : null;
      return $upload.upload({
        // redirects to dashboard when contact is added
        url: '/newDonee',
        method: 'POST',
        withCredentials: true,
        data: {donee:donee},
        file: file,
        // uniform file name for all photos
        fileName: 'photo.jpg'
      });
    }

  }]);

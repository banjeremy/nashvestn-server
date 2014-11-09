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

/* add || update Photo */
$scope.onFileSelect = function(image) {
  //image: an array of files selected (aka $files), but we are only allowing one; each file has name, size, and type.
  if (angular.isArray(image)) {
      image = image[0];
  }else{
      image = null;
  }

  // This is how we handle file types on the client side
  // MLF NOTE: should this file path be api/donees/:id/image/png || jpg ??
  if (image.type !== 'image/png' && image.type !== 'image/jpg') {
      alert('Sorry, only PNG and JPG files are accepted.');
      return;
  }

  $scope.uploadInProgress = true;
  $scope.uploadProgress = 0;

  $scope.uploadPhoto = $upload.uploadPhoto({
      url: 'api/donees/:id/image', // node.js route
      method: 'POST',
      withCredentials: true,
      // MLF NOTE: data is not included in this example
      //data: {myObj: $scope.myModelObj},
      file: image,
  }).progress(function(event) {
      $scope.uploadProgress = Math.floor(event.loaded / event.total);
      console.log('percent: ' + Math.floor(event.loaded / event.total));
      $scope.$apply();
  }).success(function(data, status, headers, config) {
      $scope.uploadInProgress = false;
      // If you need uploaded file immediately
      $scope.uploadedImage = JSON.parse(data);
      // check if file is uploaded successfully
      console.log(data);
  }).error(function(err) {
      $scope.uploadInProgress = false;
      console.log('Error uploading file: ' + err.message || err);
  });
};
// END UPLOAD PHOTO

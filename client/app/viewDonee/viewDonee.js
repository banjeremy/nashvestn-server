'use strict';

angular.module('nashvestnServerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewDonee', {
        templateUrl: 'app/viewDonee/viewDonee.html',
        controller: 'ViewdoneeCtrl'
      });
  });


function createQrcode(text, typeNumber, errorCorrectLevel){
  var qrcode = require('qrcode'),
	    qr = qrcode(typeNumber || 4, errorCorrectLevel || 'M');
	qr.addData(text);
	qr.make();

	return qr.createImgTag();
}

$(document).ready(function(){
  //var qrValue = jquery('#id').val();
  var qrValue = '123456789012345678901234';

  $('#qrcode').html(createQrcode(qrValue, 4, 'H'));

});

'use strict';

angular.module('nashvestnServerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewDonee', {
        templateUrl: 'app/viewDonee/viewDonee.html',
        controller: 'ViewdoneeCtrl'
      });
  });


function create_qrcode(text, typeNumber, errorCorrectLevel) {
  var qrcode = require('qrcode');
	var qr = qrcode(typeNumber || 4, errorCorrectLevel || 'M');
	qr.addData(text);
	qr.make();

	return qr.createImgTag();
}

$(document).ready(function(){
  //var qrValue = jquery('#id').val();
  var qrValue = '123456789012345678901234';

  $('#qrcode').html(create_qrcode(qrValue, 4, 'H'));

});

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DoneeSchema = new Schema({
  name: String,
  identifier: String,
  skills: String,
  story: String,
//  photo: file,
  active: Boolean
});

//Donee.create = function(doneeInfo, file, cb){
//  var d = new Donee(doneeInfo, file);
//};

module.exports = mongoose.model('Donee', DoneeSchema);

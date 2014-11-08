'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DoneeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Donee', DoneeSchema);
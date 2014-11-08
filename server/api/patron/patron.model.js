'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatronSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Patron', PatronSchema);
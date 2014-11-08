'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PatronSchema = new Schema({
  name: String,
  userId: ObjectId,
  createdOn: Date,
  modifiedOn: Date,
  lastLogin: Date
});

module.exports = mongoose.model('Patron', PatronSchema);

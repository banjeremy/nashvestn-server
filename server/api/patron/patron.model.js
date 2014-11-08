'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PatronSchema = new Schema({
  name: String,
  userId: ObjectId,
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patron', PatronSchema);

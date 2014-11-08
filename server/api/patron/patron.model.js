'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PatronSchema = new Schema({
  userId: ObjectId,
  name: String
});

module.exports = mongoose.model('Patron', PatronSchema);

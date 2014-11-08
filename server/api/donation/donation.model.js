'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var DonationSchema = new Schema({
  doneeId: ObjectId,
  patronId: ObjectId,
  programId: ObjectId,
  amount: Number,
  date: Date
});

module.exports = mongoose.model('Donation', DonationSchema);

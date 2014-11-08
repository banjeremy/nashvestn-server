'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = ('../user/user.model'),
    Donation = ('../donation/donation.model');

var DoneeSchema = new Schema({
  alias: String,
  name: String,
  email: {type: String, unique: true},
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  active: Boolean,
  photo: String,
  qrCode: String,
  story: String,
  skills: [String],
  goals: [String],
  updates: [UpdateSchema],
  donations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Donation'}]
});

var UpdateSchema = new Schema({
  text: String,
  createdOn: {type: Date, default: Date.now}
});

/**
 * Virtuals
 */
// Public profile information
DoneeSchema
  .virtual('profile')
  .get(function() {
    return {
      'alias': this.alias,
      'createdOn': this.createdOn,
      'photo': this.photo,
      'qrCode': this.qrCode,
      'story': this.story,
      'skills': this.skills,
      'goals': this.goals,
      'updates'
    };
  });

/**
 * Methods
 */
// DoneeSchema.methods = {
//
// };

module.exports = mongoose.model('Donee', DoneeSchema);

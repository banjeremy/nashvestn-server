'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = ('../user/user.model'),
    Donation = ('../donation/donation.model');

var UpdateSchema = new Schema({
  text: String,
  timestamp: {type: Date, default: Date.now}
});

var DoneeSchema = new Schema({
  alias: String,
  name: String,
  email: {type: String, unique: true},
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  active: Boolean,
  photo: String,
  story: String,
  skills: [String],
  goal: String,
  updates: [UpdateSchema],
  donations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Donation'}]
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
      'story': this.story,
      'skills': this.skills,
      'goal': this.goal,
      'updates': this.updates
    };
  });

/**
 * Methods
 */
// DoneeSchema.methods = {
//
// };

module.exports = mongoose.model('Donee', DoneeSchema);

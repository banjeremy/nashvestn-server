/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /patrons              ->  index
 * POST    /patrons              ->  create
 * GET     /patrons/:id          ->  show
 * PUT     /patrons/:id          ->  update
 * DELETE  /patrons/:id          ->  destroy
 */

'use strict';

var _      = require('lodash'),
    Patron = require('./patron.model'),
    Donation = require('../donation/donation.model'),
    Donee = require('../donee/donee.model'),
    async = require('async');

// Get list of patrons
exports.index = function(req, res) {
  Patron.find(function (err, patrons) {
    if(err) { return handleError(res, err); }
    return res.json(200, patrons);
  });
};

// Get a single patron
exports.show = function(req, res) {
  Patron.findById(req.params.id, function (err, patron) {
    if(err) { return handleError(res, err); }
    if(!patron) { return res.send(404); }
    return res.json(patron);
  });
};

// Creates a new patron in the DB.
exports.create = function(req, res) {
  Patron.create(req.body, function(err, patron) {
    if(err) { return handleError(res, err); }
    return res.json(201, patron);
  });
};

// Updates an existing patron in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Patron.findById(req.params.id, function (err, patron) {
    if (err) { return handleError(res, err); }
    if(!patron) { return res.send(404); }
    var updated = _.merge(patron, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, patron);
    });
  });
};

exports.me = function(req, res) {
  var patronId = 'b00000000000000000000005';
  Patron.findById(patronId, function (err, patron) {
    if(err) { return handleError(res, err); }
    if(!patron) { return res.send(404); }

    Donation.find({patronId:patronId}, function(err, donations){
      var result = patron.profile;

      async.map(donations, function(donation, callback){
        Donee.findOne({_id: donation.doneeId}, function(err, donee){
          callback(null, {
            name: donee.name,
            date: donation.date,
            amount: donation.amount
          });
        });
      }, function(err, newDonations){
        result.donations = newDonations;
        res.json(result);
      });
    });
  });
};

// Deletes a patron from the DB.
exports.destroy = function(req, res) {
  Patron.findById(req.params.id, function (err, patron) {
    if(err) { return handleError(res, err); }
    if(!patron) { return res.send(404); }
    patron.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

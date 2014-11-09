/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /donations              ->  index
 * POST    /donations              ->  create
 * GET     /donations/:id          ->  show
 * PUT     /donations/:id          ->  update
 * DELETE  /donations/:id          ->  destroy
 */

'use strict';

var _        = require('lodash'),
    Donation = require('./donation.model');

// Get list of donations
exports.index = function(req, res) {
  Donation.find(function (err, donations) {
    if(err) { return handleError(res, err); }
    return res.json(200, donations);
  });
};

// Get a single donation
exports.show = function(req, res) {
  Donation.findById(req.params.id, function (err, donation) {
    if(err) { return handleError(res, err); }
    if(!donation) { return res.send(404); }
    return res.json(donation);
  });
};

// Creates a new donation in the DB.
exports.create = function(req, res) {
  Donation.create(req.body, function(err, donation) {
    if(err) { return handleError(res, err); }
    return res.json(201, donation);
  });
};

// Updates an existing donation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Donation.findById(req.params.id, function (err, donation) {
    if (err) { return handleError(res, err); }
    if(!donation) { return res.send(404); }
    var updated = _.merge(donation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, donation);
    });
  });
};

// Deletes a donation from the DB.
exports.destroy = function(req, res) {
  Donation.findById(req.params.id, function (err, donation) {
    if(err) { return handleError(res, err); }
    if(!donation) { return res.send(404); }
    donation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

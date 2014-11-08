'use strict';

var _     = require('lodash');
var Donee = require('./donee.model');
var mp    = require('multiparty');

// Get list of donees
exports.index = function(req, res) {
  Donee.find(function (err, donees) {
    if(err) { return handleError(res, err); }
    return res.json(200, donees);
  });
};

// Get a single donee
exports.show = function(req, res) {
  Donee.findById(req.params.id, function (err, donee) {
    if(err) { return handleError(res, err); }
    if(!donee) { return res.send(404); }
    return res.json(donee);
  });
};

// Creates a new donee in the DB.
exports.create = function(req, res) {
  var form = new mp.Form();
  // parses form information from req
  form.parse(req, function(err, data, file){
    var info = data.donee[0];
    var doneeInfo = JSON.parse(info);
    Donee.create(doneeInfo, function(err, donee) {
      if(err) { return handleError(res, err); }
      return res.json(201, donee);
    });
  });
};

// Updates an existing donee in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Donee.findById(req.params.id, function (err, donee) {
    if (err) { return handleError(res, err); }
    if(!donee) { return res.send(404); }
    var updated = _.merge(donee, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, donee);
    });
  });
};

// Deletes a donee from the DB.
exports.destroy = function(req, res) {
  Donee.findById(req.params.id, function (err, donee) {
    if(err) { return handleError(res, err); }
    if(!donee) { return res.send(404); }
    donee.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

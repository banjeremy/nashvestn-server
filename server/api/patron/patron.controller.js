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
    Patron = require('./patron.model');

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

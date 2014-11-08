/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var users = require('./seed/users');
var patrons = require('./seed/patrons');
var donations = require('./seed/donations');
var donees = require('./seed/donees');

var Patron = require('../api/patron/patron.model');
var User = require('../api/user/user.model');
var Donation = require('../api/donation/donation.model');
var Donee = require('../api/donee/donee.model');

User.find({}).remove(function() {
  User.create(users, function() {
        console.log('finished populating users');
        Patron.find({}).remove(function(){
          Patron.create(patrons, function(){
            console.log('finished populating patrons');
            Donee.find({}).remove(function(){
              Donee.create(donees, function() {
                console.log('finished populating donees');
                Donation.find({}).remove(function(){
                  Donation.create(donations, function() {
                    console.log('finished populating donations');
                  });
                });
              });
            });
          });
        });
      }
  );
});

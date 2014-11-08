/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Patron = require('../api/patron/patron.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Patron',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
        console.log('finished populating users');

        Patron.find({}).remove(function(){
          User.find({role: 'patron'}, function(err, users) {
            users.forEach(function(user){
              Patron.create({
                userId: user._id
              })
            });
          });
        });
      }
  );
});

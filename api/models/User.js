/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const crypto = require('crypto');

var User = {

  attributes: {
    name: {type: 'string', required: true,},
    surname: {type: 'string', required: true,},
    username: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true, minLength: 5},
    admin: {type: 'boolean',defaultsTo: false},
  },

  customToJSON: function() {
        return _.omit(this, 'password');
    },

  beforeCreate: function (values, next) {
    /*User
      .find({username: values.username})
      .exec(function (err, record) {
        if(!err && !record) next(err);
    });*/
    var mainPass = crypto.createHash('sha256');
    mainPass.update(values.password);
    values.password = mainPass.digest('hex');
    next();     
  }

};

module.exports = User;


/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const crypto = require('crypto');

var User = {

  attributes: {

    id: {type: 'number', autoIncrement: true,},
    username: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true, minLength: 5},
    admin: {type: 'boolean',defaultsTo: false},
  },

  customToJSON: function() {
        return _.omit(this, 'password');
    },

  beforeCreate: function (values, next) {
    // Создаем зашифрованную запись пароля в БД
    var mainPass = crypto.createHash('sha256', values.password);
    values.password = mainPass.digest('hex');
    next();     
  }

};

module.exports = User;


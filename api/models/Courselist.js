/**
 * Courselist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      course: {
          type: 'string',
          maxLength: 2,
          required: true
      },
      gNum: {
          type: 'string',
          required: true
      },
    },

};


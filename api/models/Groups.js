/**
 * Groups.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      gNum: {
          type: 'string',
          maxLength: 10,
          required: true
      },
      content: {
          type: 'string',
          required: true
      },
    },

};


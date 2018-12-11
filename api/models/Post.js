/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
      title: {
          type: 'string',
          maxLength: 120,
          required: true
      },
      description: {
          type: 'string',
          required: true
      },
      content: {
          type: 'string',
          required: true
      },
      id: { 
          type: 'number', 
          autoIncrement: true, 
      },
  
    },

};


/**
 * Subject.js
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
    // User Id
    userId:{
        type: 'string',
        required: true,
    },
    // Day of the week
    day:{
        type:'string',
        required:true,
    },
    // Subject name
    name:{
      type:'string',
      required:true,
    },  
    // Day of the week
    number:{
        type:'string',
        required:true,
    },
  },

};


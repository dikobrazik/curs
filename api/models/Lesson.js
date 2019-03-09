/**
 * Lesson.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    subjId: {
      type: 'string',
      required: true
    },
    content: {
      type: 'json',
      required: true
    },
    date:{
      type:'string',
      required: true,
    },
  },
};


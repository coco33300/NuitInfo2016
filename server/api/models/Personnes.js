/**
 * Personnes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    nom: {
      type: 'string'
    },

    prenom: {
      type: 'string'
    },

    photo: {
      type: 'binary'
    },

    nationalite: {
      type: 'string'
    },

    age: {
      type: 'integer'
    },

    derniere_loc_lat: {
      type: 'float'
    },

    derniere_loc_lng: {
      type: 'float'
    }
  }
};


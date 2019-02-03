/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_evento',
  attributes: {
    nombre:{
      type: 'String',
      required: true,
      unique: true
    },
    fecha:{
      type: 'String'
    },
    latitud: {
      type: 'number',
      columnType: 'float'
    },
    longitud:{
      type: 'number',
      columnType: 'float'
    },
    eventoMedicamento:{
      collection: 'EventoPorMedicamento',
      via: 'idEvento'
    },
  },

};


/**
 * EventoPorMedicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_evento_medicamento',
  attributes: {
    idMedicamento:{
      model: 'Medicamento'
    },
    idEvento:{
      model: 'Evento'
    }
  },

};


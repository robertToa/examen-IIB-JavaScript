/**
 * Medicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'tb_medicamento',
  attributes: {
    gramosIngerir:{
      type: 'number',
      columnName: 'gramos_ingerir',
      columnType: 'int',
      defaultsTo: 0
    },
    nombre:{
      type: 'String',
      required: true
    },
    composicion:{
      type: 'String',
      required: true
    },
    usadoPara:{
      type: 'String',
      columnName: 'usado_para',
      required: true
    },
    fechaCaducidad:{
      type: 'String',
      columnName: 'fecha_caducidad',
      required: true,
    },
    numeroPastillas: {
      type: 'number',
      columnType: 'int',
      columnName: 'numero_pastillas',
      defaultsTo: 0
    },
    idPaciente:{
      model: 'Paciente'
    },
    eventoMedicamento:{
      collection: 'EventoPorMedicamento',
      via: 'idMedicamento'
    },
  },
};


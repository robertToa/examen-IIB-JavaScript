/**
 * Paciente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_paciente',

  attributes: {
    nombres: {
      type: 'String',
      required: true,
    },
    apellidos: {
      type: 'String',
      required: true
    },
    fechaNacimiento: {
      type: 'String',
      columnName: 'fecha_nacimiento'
    },
    hijos: {
      type: 'number',
      columnType: 'int',
      min:0,
      max: 20,
      defaultsTo: 0
    },
    tieneSeguro: {
      type: 'boolean',
      columnName: 'tiene_seguro',
      defaultsTo: false
    },
    idUsuario:{
      model: 'Usuario'
    },
    medicamento:{
      collection: 'Medicamento',
      via: 'idPaciente'
    },
  },

};


/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_usuario',
  attributes: {
    nombre: {
      type: 'String',
      unique: true,
      required: true
    },
    correo:{
      type: 'String',
      required: true,
      isEmail: true
    },
    password: {
      type: 'String',
      required: true
    },
    fechaNacimiento:{
      type: 'String',
      required: true,
      columnName: 'fecha_nacimiento'
    },
    rolesUsuario:{
      collection: 'RolesPorUsuario',
      via: 'idUsuario'
    },
    paciente:{
      collection: 'Paciente',
      via: 'idUsuario'
    },
  },

};


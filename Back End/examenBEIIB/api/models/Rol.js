/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_rol',
  attributes: {
    nombre: {
      type: 'String',
      unique: true,
      isIn: [
        'Administrador',
        'Usuario'
      ],
      defaultsTo: 'Usuario'
    },
    rolesUsuario:{
      collection: 'RolesPorUsuario',
      via: 'idRol'
    },
  },

};


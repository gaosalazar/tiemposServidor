module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', required: true },
    correo: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    empresas: { collection: 'empresa', via: 'usuario', through: 'empresausuario' }
  },

  primaryKey: 'id',

  beforeCreate: function (valuesToSet, proceed) {
 
    sails.helpers.encriptacion(valuesToSet.password).exec((err, hashedPassword) => {
      if (err) { return proceed(err); }
      valuesToSet.password = hashedPassword;
      return proceed();
    });
  }

};


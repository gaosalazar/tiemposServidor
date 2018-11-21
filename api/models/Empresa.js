module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string' },
    ruc: { type: 'string' },
    direccion: { type: 'string' },
    telefono: { type: 'string' },
    correo: { type: 'string' },
    personas: { collection: 'persona', via: 'empresa' },
    vehiculos: {collection:'vehiculo', via : 'empresa'}
  },

  primaryKey: 'id'

};


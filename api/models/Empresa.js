module.exports = {
  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', required: true },
    ruc: { type: 'string', required: true },
    direccion: { type: 'string' },
    telefono: { type: 'string' },
    correo: { type: 'string', isEmail: true, required: true },
    personas: { collection: 'persona', via: 'empresa' },
    vehiculos: {collection:'vehiculo', via : 'empresa'}
  },
  primaryKey: 'id'
};


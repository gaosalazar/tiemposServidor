module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', required: true },
    identificacion: { type: 'string', required: true },
    correo: { type: 'string', isEmail: true, required: true },
    direccion: { type: 'string' },
    telefono: { type: 'string' },
    es_cliente: {  type: 'boolean', defaultsTo: false},
    es_empleado: {  type: 'boolean', defaultsTo: false, },
    vehiculos: {collection:'vehiculo', via : 'persona'},
    empresa: {model: 'empresa'},
    ordenes: {collection: 'orden', via: 'persona'}
  },

  primarykey: 'id'

};


module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    fecha: { type: 'string' },
    persona: { model: 'persona' },
    vehiculo: { model: 'vehiculo' },
    servicios: { collection: 'servicio', via: 'orden', through: 'ordenservicio' }
  },
  primaryKey:'id'

};


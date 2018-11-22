module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string' },
    tiempo_estandar: { type: 'string' },
    categoria: { model: 'categoria' },
    ordenes: {collection: 'orden', via: 'servicio', through: 'ordenservicio'}
  },

  primaryKey: 'id'

};


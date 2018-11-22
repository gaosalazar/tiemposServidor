module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    marca: { model: 'marca' },
    nombre: { type: 'string', required: true },
    marca: {model: 'marca'},
    vehiculos: { collection: 'vehiculo', via: 'modelo' }
  },

  primaryKey: 'id'

};


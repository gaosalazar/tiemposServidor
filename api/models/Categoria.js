module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string' },
    padre: { model: 'categoria' },
    categorias: { collection: 'categoria', via: 'padre' }
  },
  primaryKey: 'id'

};


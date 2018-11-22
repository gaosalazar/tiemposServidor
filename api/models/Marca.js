module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string' },
    empresa: { type: 'string' },
    modelos: { collection: 'modelo', via: 'marca' }
  },

  primaryKey: 'id'
};


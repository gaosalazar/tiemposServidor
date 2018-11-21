module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true },
    placa: { type: 'string' },
    numero_motor: { type: 'string' },
    numero_chasis: { type: 'string' },
    empresa: { model: 'empresa' },
    persona: { model: 'persona' }
  },

  primaryKey: 'id'

};


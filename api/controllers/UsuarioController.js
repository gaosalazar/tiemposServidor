const bcrypt = require('bcrypt');

module.exports = {
  login: function (req, res) {
    var body = req.body;
    Usuario.findOne({ nombre: body.nombre }).exec(function (err, usuario) {
      if (err) {
        return res.serverError(err);
      }
      if (!usuario) {
        return res.notFound('No existe el usuario');
      }

    

      if (!bcrypt.compareSync(body.password, usuario.password)) {
        return res.serverError('Contraseña incorrecta');
      }

      req.session.me = usuario.id;
      return res.ok({ id: usuario });
    });


  },

  logout: function(req, res) {
    req.session.destroy(function(err) {
         return res.ok('Sesión cerrada');
    });
}

};


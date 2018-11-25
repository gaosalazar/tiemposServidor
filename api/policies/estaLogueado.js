module.exports = async function (req, res, proceed) {

    if (req.session.me) {
      return proceed();
    }
    return res.forbidden();
  
  };
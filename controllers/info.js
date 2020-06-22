const jsToken = require('jsonwebtoken')
const jsonWebToken = require('../config/jwt')

module.exports.info = (req, res) => {
  try {
    const decoded = jsToken.verify(req.headers['authorization'].replace('Bearer ', ''), jsonWebToken.SECRET_JWT);
    if (decoded) {
      res.status(200).json({
        id: req.user.id,
        idType: req.user.idType,
        user: req.user
      })
    }
  } catch (e) {
    res.status(401).json({
      message: `error! ${e}`
    })
  }
}
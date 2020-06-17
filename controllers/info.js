const mongoose = require('mongoose')
const Users = mongoose.model('users')
module.exports.info = (req, res) => {
  res.status(200).json({
    id: req.user.id,
    idType: req.user.idType
  })
}
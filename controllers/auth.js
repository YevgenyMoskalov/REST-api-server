const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jsonWebToken = require('../Utils/jwtUtils')
const regexpEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const regexpPhone = /^\+?\d{12}$/;

module.exports.signin = async function(req, res) {
  const user = await User.findOne({id: req.body.id})
  if (user){
    const pasResult = bcrypt.compareSync(req.body.password, user.password)
    if (pasResult) {
      const token = jsonWebToken.genWebToken(user)
      await jsonWebToken.addTokenToUser(token, user)
      await res.status(200).json({
        token: `Bearer ${token}`,
        password: user.password
      })
    } else {
      await res.status(401).json({
        message: "Wrong password!"
      })
    }
  } else {
    await res.status(404).json({
      message: "User not found!"
    })
  }
}

module.exports.signup = async function(req, res) {
  if (isValidId(req.body.id)) {
    if (await User.findOne({id: req.body.id})) {
      //error 409 Conflict
      await res.status(409).json({
        message: "id is already taken!"
      })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        id: req.body.id,
        password: bcrypt.hashSync(password, salt),
        idType: regexpEmail.test(req.body.id) ? "email" : "number"
      })

      try {
        const token = jsonWebToken.genWebToken(user)
        await jsonWebToken.addTokenToUser(token, user)
        await res.status(201).json({
          token: `Bearer ${token}`
        })
      } catch (e) {
        await res.status(500).json({
          message: 'error 500 Internal Server Error'
        })
      }
    }
  } else {
    await res.status(406).json({
      message: "Invalid id!"
    })
  }
}

function isValidId(id) {
  return regexpEmail.test(id) || regexpPhone.test(id)
}
const bcrypt = require('bcryptjs')
const jsToken = require('jsonwebtoken')
const User = require('../models/User')
const jsonWebToken = require('../config/jwt')
const TOKEN_LIFETIME = 10 * 60  //10 min
const regexpEmail = /.+@.+\..+/;
const regexpPhone = /^\+?\d{12}$/;

module.exports.signin = async function(req, res) {
  const user = await User.findOne({id: req.body.id})
  if (user){
    const pasResult = bcrypt.compareSync(req.body.password, user.password)
    if (pasResult) {
      const token = genWebToken(user)
      await addTokenToUser(token, user)
      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        message: "Wrong password!"
      })
    }
  } else {
    res.status(404).json({
      message: "User not found!"
    })
  }
}

module.exports.signup = async function(req, res) {
  if (isValidId(req.body.id)) {
    if (await User.findOne({id: req.body.id})) {
      //error 409 Conflict
      res.status(409).json({
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
        const token = genWebToken(user)
        await addTokenToUser(token, user)
        res.status(201).json({
          token: `Bearer ${token}`
        })
      } catch (e) {
        // error 500 Internal Server Error
        res.status(500).json({
          message: e
        })
      }
    }
  } else {
    // error 406 Not Acceptable
    res.status(406).json({
      message: "Invalid id!"
    })
  }
}

function isValidId(id) {
  return regexpEmail.test(id) || regexpPhone.test(id)
}

function genWebToken(user) {
  return jsToken.sign({id: user.id,}, jsonWebToken.SECRET_JWT, {expiresIn: TOKEN_LIFETIME})
}

function addTokenToUser(token, user) {
  user.tokens = user.tokens.concat({token})
  user.save()
}
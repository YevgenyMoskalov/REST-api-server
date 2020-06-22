const jsToken = require('jsonwebtoken')
const SECRET_TOKEN = require('../config/jwt').SECRET_JWT
const TOKEN_LIFETIME = 10 * 60  //10 min

function jsonWebToken() {}

jsonWebToken.genWebToken = (user) => {
  return jsToken.sign({id: user.id,}, SECRET_TOKEN, {expiresIn: TOKEN_LIFETIME})
}

jsonWebToken.addTokenToUser = (token, user) => {
  user.tokens = user.tokens.concat({token})
  return user.save()
}

module.exports = jsonWebToken
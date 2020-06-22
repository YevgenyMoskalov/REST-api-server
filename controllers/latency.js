const request = require('request')
const jsonWebToken = require('../Utils/jwtUtils')
const DEFAULT_URL = 'http://google.com'

module.exports.latency = async (req, res) => {
  const url = req.query.url || DEFAULT_URL
  const time = process.hrtime()
  await request(url)
  const diff = process.hrtime(time);
  const newToken = jsonWebToken.genWebToken(req.user)
  jsonWebToken.addTokenToUser(newToken, req.user)
  await res.status(200).json({
    url: url,
    latency: `${diff[0] * 1e9 + diff[1]} nanoseconds`,
  })
}
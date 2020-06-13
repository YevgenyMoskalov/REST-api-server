module.exports.signin = (req, res) => {
  res.status(200).json({
    signin: 'signin from controller'
  })
}

module.exports.signup = (req, res) => {
  res.status(200).json({
    signup: 'signup from controller'
  })
}
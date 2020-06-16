module.exports.signin = (req, res) => {
  res.status(200).json({
    signin: {
      id: req.body.id,
      password: req.body.password
    }
  })
}

module.exports.signup = (req, res) => {
  res.status(200).json({
    signup: 'signup from controller'
  })
}
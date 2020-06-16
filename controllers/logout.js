module.exports.logout = (req, res) => {
  res.status(200).json({
    logout: 'logout from controller'
  })
}
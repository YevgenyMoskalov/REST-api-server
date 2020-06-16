module.exports.info = (req, res) => {
  res.status(200).json({
    info: 'info from controller'
  })
}
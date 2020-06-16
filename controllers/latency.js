module.exports.latency = (req, res) => {
  res.status(200).json({
    latency: 'latency from controller'
  })
}
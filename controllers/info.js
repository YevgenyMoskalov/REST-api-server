module.exports.info = (req, res) => {
  try {
    res.status(200).json({
      id: req.user.id,
      idType: req.user.idType
    })
  } catch (e) {
    res.end.json({
      message: `error! ${e}`
    })
  }
}
module.exports.logout = (req, res) => {
  if(req.query.all === null){
    res.status(422).json({
      message: 'missing parameter \'all\''
    })
  }
  const deletedToken = req.headers['authorization'].replace('Bearer ', '')
  if(req.query.all === 'true'){
    //deleted all tokens
    req.user.removeTokens().then(() => {
      res.status(200).json({
        message: 'all tokens is deleted'
      })
    }).catch((e) => {
      console.log(e)
      res.status(500)
    })
  } else if(req.query.all === 'false'){
    // deleted one token
    req.user.removeToken(deletedToken).then(() => {
      res.status(200).json({
        message: `Token ${deletedToken} is deleted`
      })
    }).catch((e) => {
      console.log(e)
      res.status(500)
    })
  } else {
    res.status(400).json({
      message: 'Bad Request'
    })
  }
}
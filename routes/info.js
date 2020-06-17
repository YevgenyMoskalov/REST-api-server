const express = require('express')
const controller = require('../controllers/info')
const passport = require('passport')
const router = express.Router()


// localhost:PORT/api/info
router.get('/info',passport.authenticate('jwt', {session: false}), controller.info)

module.exports = router
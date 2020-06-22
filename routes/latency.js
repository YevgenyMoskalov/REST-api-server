const express = require('express')
const passport = require('passport')
const controller = require('../controllers/latency')
const router = express.Router()

// localhost:PORT/api/latency
router.get('/latency',passport.authenticate('jwt', {session: false}), controller.latency)

module.exports = router
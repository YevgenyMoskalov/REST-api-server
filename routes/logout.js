const express = require('express')
const passport = require('passport')
const controller = require('../controllers/logout')
const router = express.Router()

// localhost:PORT/api/logout
router.get('/logout',passport.authenticate('jwt', {session: false}), controller.logout)

module.exports = router
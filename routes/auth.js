const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

// localhost:PORT/api/auth/signin
router.post('/signin', controller.signin)

// localhost:PORT/api/auth/signup
router.post('/signup', controller.signup)

module.exports = router
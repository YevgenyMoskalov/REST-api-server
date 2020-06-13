const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

// localhost:3000/api/auth/signin
router.post('/signin', controller.signin)

// localhost:3000/api/auth/signup
router.post('/signup', controller.signup)

module.exports = router
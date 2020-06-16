const express = require('express')
const controller = require('../controllers/logout')
const router = express.Router()

// localhost:3000/api/logout
router.get('/logout', controller.logout)

module.exports = router
const express = require('express')
const controller = require('../controllers/latency')
const router = express.Router()

// localhost:3000/api/latency
router.get('/latency', controller.latency)

module.exports = router
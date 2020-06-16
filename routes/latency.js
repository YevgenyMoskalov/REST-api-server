const express = require('express')
const controller = require('../controllers/latency')
const router = express.Router()

router.get('/latency', controller.latency)

module.exports = router
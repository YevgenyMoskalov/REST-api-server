const express = require('express')
const controller = require('../controllers/info')
const router = express.Router()

// localhost:3000/api/info
router.get('/info', controller.info)

module.exports = router
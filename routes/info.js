const express = require('express')
const controller = require('../controllers/info')
const router = express.Router()

router.get('/info', controller.info)

module.exports = router
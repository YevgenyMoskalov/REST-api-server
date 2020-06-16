const express = require('express')
const authRoutes = require('./routes/auth')
const infoRoute = require('./routes/info')
const latencyRoute = require('./routes/latency')
const logoutRoute = require('./routes/logout')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api', infoRoute)
app.use('/api', logoutRoute)
app.use('/api', latencyRoute)
module.exports = app
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const infoRoute = require('./routes/info')
const latencyRoute = require('./routes/latency')
const logoutRoute = require('./routes/logout')
const db = require('./config/db')
const app = express()

mongoose.connect(db.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.log(error))

app.use(require('morgan')('dev')) // логирование запросов
app.use(require('cors')())        //обработка доступа из любого домена
// подключение body-parser для обработки json объектов от пользователя
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//подключение роутов
app.use('/api/auth', authRoutes)
app.use('/api', infoRoute)
app.use('/api', logoutRoute)
app.use('/api', latencyRoute)
module.exports = app
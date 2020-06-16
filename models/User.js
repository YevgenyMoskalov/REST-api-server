const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  idType: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('users', userSchema)
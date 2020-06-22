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
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    }
  }]
})

userSchema.methods.removeToken = async function(deletedToken) {
  let index = this.tokens.indexOf(deletedToken)
  this.tokens.splice(index, 1);
  await this.save()
}

userSchema.methods.removeTokens = async function() {
  this.tokens = [];
  await this.save();
};

module.exports = mongoose.model('users', userSchema)
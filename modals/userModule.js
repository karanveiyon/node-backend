const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  rollnumber: {
    type: Number,
    require: true
  },
  subject: {
    type: String,
    require: true
  }
},{timestamps: true,})

module.exports = mongoose.model("user", userSchema)
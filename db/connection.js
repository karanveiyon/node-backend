const mongoose = require('mongoose')
require('dotenv').config();
const URI = process.env.CONNECTION_URL


const connectDatabase = async() =>{
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log('database has been connected...')
}

module.exports = connectDatabase;
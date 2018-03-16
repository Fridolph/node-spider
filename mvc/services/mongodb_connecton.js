const mongoose = require('mongoose')

mongoose.Promise = Promise

const URI = 'mongodb://localhost:27017/learn_node'

mongoose.connect(URI)

const db = mongoose.connection

db.on('open', () => {
  console.log('db connected!')
})

db.on('error', e => {
  console.log(e)
})

module.exports = db
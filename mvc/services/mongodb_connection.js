const mongoose = require('mongoose')
mongoose.Promise = Promise
const ADDR = 'mongodb://localhost:27017/learn'
mongoose.connect(ADDR)
const db = mongoose.connection

// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId
// const UserSchema = new Schema({
//   name: {type: String, required: true, unique: true, index: 1},
//   age: {type: Number, max: 199, min: 0},
// })

// const UserModel = mongoose.model('user', UserSchema)

// async function model(params) {
//   const filter = {}
//   if (params.name) filter.name = params.name
//   const flow = UserModel.find(filter)
//   if (params.projection) flow.select(params.projection)
//   if (params.sort) flow.sort(params.sort)
//   const users = await flow.exec()
//   console.log(users)
//   return users
// }

module.exports = db
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true, index: 1 },
  age: { type: Number, min: 0, max: 199 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

const UserModel = mongoose.model('user', UserSchema)

async function insert(user) {
  const newUser = await UserModel.create(user)
  return newUser
}

async function getOneById(id) {
  const user =  await UserModel.findOne({ _id: id })
  return user
}

async function getOneByName(name) {
  const user =  await UserModel.findOne({ name })
  return user
}

async function list(params) {
  const match = {}
  const flow = userModel.find(match)
  const user = await flow.exec()
  return user
}

module.exports = {
  insert,
  getOneById,
  getOneByName,
  list
}
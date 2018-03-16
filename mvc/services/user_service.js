const User = require('../models/mongoose/user')
// const subscription = require('../models/mongoose/')

async function getAllUsers() {
  const users = await User.list()
  return users
}

async function addNewUser(name, age) {
  const user = await User.insert({ name, age })
  return user
}

async function getUserById(userid) {
  const user = await User.getOneById(userid)
  return user
}

async function createSubscription(userid, url) {
  const user = User.getOneById(userid)
  if (!user) throw Error('no such user')
  const sub = Subscription.insert(userid, url)
  return sub
}

module.exports = {
  getAllUsers,
  addNewUser,
  getOneById,
  createSubscription
}
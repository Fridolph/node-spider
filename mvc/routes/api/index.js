const express = require('express')
const router = express.Router()
const login = require('./login')
const hello = require('./hello')

const users = []

router.get('/', (req, res, next) => {
  res.send('api')
})

router.get('/login', login)

router.get('/hello', hello)

module.exports = router

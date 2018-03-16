const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')

// 虚拟user
const User = require('../../models/mongoose/')

router.post('/login', (req, res, next) => {  
  const {username, password} = req.body
  
})

module.exports = router
const express = require('express')
const JWT = require('jsonwebtoken')
const router = express.Router()

router.get('/hello', (req, res, next) => {
  const auth = req.get('Authorization')
  if (!auth) return res.send('no auto')
  if (!auth.indexOf('Bearer') === -1) res.send('no auto')
  
  const token = auth.split('Bearer ')[1]
  const user = JWT.verify(token, 'lovekk')

  res.send(user)
})

module.exports = router
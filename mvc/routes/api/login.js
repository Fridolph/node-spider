const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')

// const crypto = require('crypto')
const { promisify } = require('util')
const {pbkdf2} = require('crypto')
const pbkdf2Async = promisify(pbkdf2)
// 虚拟user
// const User = require('../../models/mongoose/')

// router.get('/login', (req, res,next) => {
//   (async () => {
//     const {username, password} = req.query
//     const cipher = await pbkdf2Async(password, 'lovekk', 1000, 512, 'sha256')
    // console.log('username: ', username)
    // console.log('password: ', cipher)
//     res.send(`<p>用户: ${username}, \n密码: ${cipher}</p>`)
//   })()  
// })

router.post('/login', (req, res, next) => {
  ;(async () => {
    console.log(req.body)
    const { username, password } = req.body
    // pbkdf2一种加密算法
    const cipher = await pbkdf2Async(password, 'lovekk', 1000, 512, 'sha256')
    // const craeted = await userInfo.insert({username, password}).then()
    // 不可取，明文存用户密码
    console.log('username: ', username)
    console.log('password: ', cipher)
    res.send(`用户: ${username}, \n密码: ${cipher}`)

  })().then().catch(e => {})
})

module.exports = router

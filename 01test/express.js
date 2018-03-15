const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

function auth(req, res, next) {
  console.log('query', req.query)
  if (req.query.username === 'fri') {
    next('something wrong')
  } else {
    res.end('please go away')
  }
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(auth)
app.use((req, res, next) => {
  req.duang = 1
  console.log(`req.duang: ${req.duang}`)
  res.end('welcome fri')
})
// 错误处理中间件
app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)
server.listen(3000)

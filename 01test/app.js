const http = require('http')
const qs = require('querystring')

const server = http.createServer()
server.listen(8088, () => console.log('server is running at localhost:8088'))

let count = 0
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  
  let query = qs.parse(req.url)
  let resStr = '你好'
  console.log(`第${count++}次`)
  console.log('query', query)

  if (query === 'hello') {
    resStr = 'hello world'
  }

  res.end(resStr)
})

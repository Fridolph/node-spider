var express = require('express')
var router = express.Router()
const logger = require('../utils/logger')
const HttpRequestParamError = require('../err/http_request_param.erorr')

/* GET users listing. */
router.get('/', function(req, res, next) {
  (async () => {
    throw new HttpRequestParamError('page', '请指定页码', 'page can not be empty')  
  })().then(r => {
    res.end('你访问了 /user')
  }).catch(e => {
    next(e)
  }) 
})

router.get('/:userid', (req, res, next) => {
  (async () => {
    const { userid } = req.params
    if (String(userid).length < 4) {
      throw new HttpRequestParamError(
        'userid',
        '用户id不能为空'
      )
    } else {
      res.end('userid: ' + userid)
    }
  })()
    .then(r => {
      
    })
    .catch(e => {
      logger.error(e)
      res.json(e)
    })
})

module.exports = router

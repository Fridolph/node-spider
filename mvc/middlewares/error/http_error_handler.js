const HttpBaseError = require('../../err/http_base_error')
const logger = require('../../utils/logger')

function handler(options) {
  return function(err, req, res, next) {
    if (err instanceof HttpBaseError) {
      const errMeta = { query: req.query, url: req.originalUrl, userInfo: req.user }
      logger.error(err.message, errMeta)
      res.statusCode = err.httpStatusCode
      res.json({
        code: err.errCode,
        msg: err.httpMsg
      })
      next()
    } else {
      next(err)
    }
  }
}

module.exports = handler

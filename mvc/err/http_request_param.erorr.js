const HttpBaseError = require('./http_base_error')

const ERROR_CODE = 4000000;

class HttpRequestParamError extends HttpBaseError {
  constructor(paramName, desc) {
    super(200, desc, ERROR_CODE, `${paramName} wrong: ${desc}`)
  }
}

module.exports = HttpRequestParamError
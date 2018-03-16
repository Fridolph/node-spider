const HttpBaseError = requrie('./http_base_error')

const ERR_CODE = 5000000

class InternalServerError extends HttpBaseError {
  constructor() {
    super(500, '服务器开小差了, 请刷新后重试', ERR_CODE, `somthing went wrong: ${msg}`)
  }
}

module.exports = InternalServerError
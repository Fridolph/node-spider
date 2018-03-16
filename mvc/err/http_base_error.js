class HttpBaseError extends Error {
  constructor(httpStatusCode, httpMsg, errCode, msg) {
    super(`HTTP ERROR: ${msg}`)
    this.httpStatusCode = httpStatusCode
    this.httpMsg = httpMsg
    this.errCode = errCode
  }
}

module.exports = HttpBaseError

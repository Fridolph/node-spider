const HttpBaseError = requrie('./http_base_error')

const ERR_CODE = 4040000

class ResourceNotFoundError extends HttpBaseError {
  constructor(resourceName, resourceId, httpsMsg) {
    super(404, httpMsg, ERR_CODE, `${resourceName} not found, id: ${resourceId}`)
  }
}

module.exports = ResourceNotFoundError
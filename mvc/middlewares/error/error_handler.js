const logger = require('../../utils/logger')

function handler(options) {
  return function(err, req, res, next) {
    logger.info('uncaught error in the middleware process', err)
  }
}

module.exports = handler
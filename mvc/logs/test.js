const winston = require('winston')
const {Logger, transports} = winston
const logger = new (Logger)({
  transports: [
    new transports.File({
      name: 'error_logger',
      filename: './error.log',
      level: 'error'
    }),
    new transports.Console({
      level: 'error'
    }),
    new transports.File({
      name: 'info_logger',
      filename: './info.log',
      level: 'info'
    }),
  ]
})

const reqLogger = new Logger({
  transports: [
    new transports.File({
      name: 'req_logger',
      filename: 'req.log',
      level: 'info'
    })
    new transports.Console()
  ]
})

logger.info('my first info log with winston')
logger.error('my first error log with winston')
reqLogger.info('request from client')
const winston = require('winston')
require('winston-daily-rotate-file')

const {Logger, transports} = winston

const reqLogger = new Logger({
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: './req.log.',
      datePattern: 'yyyy_MM_dd',
      // prepend: true,
      level: 'info'
    })
  ]
})

reqLogger.info('request from client')
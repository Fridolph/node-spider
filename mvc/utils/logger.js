const winston = require('winston')
require('winston-daily-rotate-file')

const {Logger, transports} = winston
const {Console, DailyRotateFile} = transports

const logger = new Logger({
  transports: [
    new Console(),
    new DailyRotateFile({
      name: 'base_logger',
      filename: '../logs/info.log.',
      prepend: false,
      datePattern: 'yyyy_MM_dd',
      level: 'info'
    }),
    new DailyRotateFile({
      name: 'error_logger',
      filename: '../logs/error.log.',
      prepend: false,
      datePattern: 'yyyy_MM_dd',
      level: 'error'
    })
  ]
})

module.exports = logger
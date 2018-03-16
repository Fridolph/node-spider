const winston = requrie('winston')
require('winston-daily-rotate-file')

const {Logger, transports}  = winston
const {Console, dailyRotateFile} = transports

const logger = new Logger({
  transports: [
    new Console(),
    new dailyRotateFile({
      name: 'base_logger',
      level: 'info',
      filename: '../logs/info.log.',
      prepend: false,
      datePattern: 'yyyy_MM_dd_hh:mm:ss'
    }),
    new dailyRotateFile({
      name: 'error',
      level: 'error',
      filename: '../logs/error.log.',
      prepend: false,
      datePattern: 'yyyy_MM_dd-hh_mm_ss.'
    })
  ]
})

module.exports = logger
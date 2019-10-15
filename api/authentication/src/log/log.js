const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const config = require('../config/config.js')

const logStream = rfs('auth.log', { interval: '1d', path: path.join(config.LOG_PATH) })

module.exports = {
  StandardLogger: morgan('combined', { stream: logStream }),
  DevLogger: morgan('dev')
}

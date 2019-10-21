const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const api = require('../api/api.js')

const logStream = rfs('users.log', { interval: '1d', path: path.join(process.env.LOG_PATH) })
const logger = morgan('combined', { stream: logStream })

const start = async (options) => {
  return new Promise((resolve, reject) => {
    /* ASSERTIONS */
    if (!options.db) {
      reject(new Error('The server must be started with a connected repository'))
    }
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }
    if (!options.auth) {
      reject(new Error('The server must be started with an authentication strategy present'))
    }
    if (!options.cache) {
      reject(new Error('The server must be started with a session cache manager'))
    }

    /* API */
    const app = express()

    /* MIDDLEWARE: If required, add to assertions. */
    app.use(logger)
    app.use(bodyParser.json())
    app.use(options.cache)
    app.use(options.auth.initialize())
    app.use(options.auth.session())

    /* START */
    api(app, options.db, options.auth)

    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, { start })

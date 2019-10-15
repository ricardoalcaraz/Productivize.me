const bodyParser = require('body-parser')
const express = require('express')
const api = require('../api/habits.js')

// Some say imitation is the best form of flattery so this is stolen from https://github.com/Crizstian/cinema-microservice
const start = async (options) => {
  return new Promise((resolve, reject) => {
    if (!options.db) {
      reject(new Error('The server must be started with a connected repository'))
    }
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }
    const app = express()

    /* MIDDLEWARE */
    app.use(bodyParser.json())

    api(app, options.db)

    /* START */
    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, { start })

const express = require('express')
const bodyParser = require('body-parser')
const api = require('../api/api.js')
const { secure } = require('../security/security.js')

// Some say imitation is the best form of flattery so this is stolen from https://github.com/Crizstian/cinema-microservice
const start = async ({ settings, db }) => {
  return new Promise((resolve, reject) => {
    /* REQUIREMENTS */
    if (!settings) {
      reject(new Error('The server must be started without settings specified'))
    }
    if (!db) {
      reject(new Error('The server must be started with a database/repository.'))
    }

    /* INIT */
    const app = express()
    const route = express.Router()

    /* MIDDLEWARE */
    app.use(bodyParser.json())

    /* AUTHENTICATION */
    app.use('/tasks/', route)
    secure({ app: route })

    /* API */
    api({
      app: route,
      db,
      settings
    })

    /* START */
    const server = app.listen(settings.PORT, () => resolve(server))
  })
}

module.exports = Object.assign({}, { start })

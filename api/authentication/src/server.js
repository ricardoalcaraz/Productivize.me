const security = require('./auth/auth.js')
const bodyParser = require('body-parser')
const express = require('express')
const cache = require('./cache/cache.js')
const { PORT } = require('./config/config.js')
const api = require('./api/api.js')
const { StandardLogger, DevLogger } = require('./log/log.js')

const app = express()

/* MIDDLEWARE */
app.use(StandardLogger)
app.use(bodyParser.json())
app.use(cache)
app.use(security.initialize())
app.use(security.session())
app.use(DevLogger)

/* API */
api(app, null, security)

/* START */
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))

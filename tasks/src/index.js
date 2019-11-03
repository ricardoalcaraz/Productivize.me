const server = require('./server/server.js')
const settings = require('./settings/settings.js')
const Repository = require('./repository/repository.js')
const { Pool } = require('pg')
const db = new Repository(new Pool({
  connectionString: settings.DB_URI
}))

server.start({
  db,
  settings
}).then(() => console.log(`Task API started succesfully, running on port: ${settings.PORT}.`)).catch(e => console.log(e))

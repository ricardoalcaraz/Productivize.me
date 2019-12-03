const server = require('./server/server.js')
const settings = require('./settings/settings.js')
const Repository = require('./repository/repository.js')
const knex = require('knex')({
  client: 'pg',
  connection: settings.DB_URI
})
const db = new Repository(knex)

server.start({
  db,
  settings
}).then(() => console.log(`Task API started succesfully, running on port: ${settings.PORT}.`)).catch(e => console.log(e))

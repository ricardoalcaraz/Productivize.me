const server = require('./server/server.js')
const cache = require('./cache/cache.js')
const auth = require('./auth/auth.js')
const UserRepository = require('./repository/user_repository.js')
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
})
const port = process.env.PORT
const db = new UserRepository(knex)

server.start({
  port,
  db,
  cache,
  auth
}).catch(e => console.log(e))

console.log(`Users Microservice started succesfully, running on port: ${port}.`)

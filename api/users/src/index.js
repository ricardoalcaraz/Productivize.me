const { Pool } = require('pg')
const server = require('./server/server')
const cache = require('./cache/cache.js')
const auth = require('./auth/auth.js')
const UserRepository = require('./repository/user_repository.js')

const port = process.env.PORT
const db = new UserRepository(new Pool({
  connectionString: process.env.DATABASE_URL
}))

server.start({
  port,
  db,
  cache,
  auth
}).catch(e => console.log(e))

console.log(`Users Microservice started succesfully, running on port: ${port}.`)

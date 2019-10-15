
const server = require('./server/server')
const port = process.env.PORT
const repoCreator = require('./repository/habit_repository.js')
const { Pool } = require('pg')
const databaseURL = process.env.DATABASE_URL
const db = new repoCreator.HabitRepository(new Pool({
  connectionString: databaseURL
}))

console.log('----Habits Service----')
server.start({
  port: port,
  repo: db
})

console.log(`Server started succesfully, running on port: ${port}.`)

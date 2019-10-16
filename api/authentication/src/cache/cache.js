const session = require('express-session')
const redis = require('redis')
const { REDIS_URL, REDIS_SECRET, REDIS_TOKEN } = require('../config/config.js')
const redisClient = redis.createClient(REDIS_URL)
const redisStore = require('connect-redis')(session)

redisClient.on('error', (err) => {
  console.log('Redis error: ', err)
})

// Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds
module.exports = session({
  secret: REDIS_SECRET,
  name: REDIS_TOKEN,
  store: new redisStore({ client: redisClient }),
  saveUninitialized: false,
  resave: false
})

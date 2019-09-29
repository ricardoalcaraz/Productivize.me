const express = require('express');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient(process.env.REDIS_URL);
const redisStore = require('connect-redis')(session);
const port = process.env.PORT;

const app = express();

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

// Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds
app.use(session({
  secret: 'ssshhhhh',
  // create new redis store.
  name: "productivize_me_authentication_token",
  store: new redisStore({ client: redisClient }),
  saveUninitialized: false,
  resave: false
}));

/**
 * Returns all habits from the database
 * TO BE DEPRECATED
 */
app.get('/auth/visit', (req, res) => {
  const v = req.session.visits;
  req.session.visits = !!v ? v + 1 : 1;

  res.send("Authentication..");
});

app.get('/auth/', (req, res) => {
  console.log('Testing auth');
  res.send(`Visits: ${req.session.visits}`);
});

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
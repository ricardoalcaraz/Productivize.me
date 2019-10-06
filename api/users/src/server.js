const { Pool } = require('pg');
const express = require('express');
const cache = require('./cache/cache.js');
const bodyParser = require('body-parser');
const app = express();
const { PORT, DATABASE_URL } = require('./config/config.js');
const UserRepository = require('./repo/repo.js');
const api = require('./api/api.js');

const db = new UserRepository(new Pool({
  connectionString: DATABASE_URL,
}));

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cache);

/* API */
api(app, db);

/* START */
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
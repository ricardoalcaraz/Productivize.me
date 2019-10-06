const { Pool } = require('pg');
const express = require('express');
const cache = require('./cache/cache.js');
const bodyParser = require('body-parser');
const app = express();
const { PORT, DATABASE_URL } = require('./config/config.js');
const UserRepository = require('./repo/repo.js');
const api = require('./api/api.js');
const security = require('./auth/auth.js')
const { StandardLogger, ErrorLogger, DevLogger } = require('./log/log.js');

const db = new UserRepository(new Pool({
  connectionString: DATABASE_URL,
}));

/* MIDDLEWARE */
app.use(StandardLogger);
app.use(bodyParser.json());
app.use(cache);
app.use(security.initialize());
app.use(security.session());
app.use(DevLogger);

/* API */
api(app, db, security);

/* START */
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
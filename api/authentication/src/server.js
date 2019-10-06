const provider = require('./auth/auth.js');
const bodyParser = require('body-parser');
const express = require('express');
const { cache } = require('./cache/cache.js');
const api = require('./api/api.js');
const app = express();

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cache);
app.use(provider.initialize());
app.use(provider.session());

/* API */
api(app);

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
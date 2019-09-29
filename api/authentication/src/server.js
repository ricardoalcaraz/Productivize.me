const express = require('express');
const { session } = require('./session.js');
const api = require('./api.js');
const port = process.env.PORT;
const app = express();

/* MIDDLEWARE */
app.use(session);

app.get('/auth/visit/', api.visit);
app.get('/auth/visited/', api.visited);

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
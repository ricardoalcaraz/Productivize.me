const { Pool } = require('pg');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: databaseURL,
})

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());

/* API */
app.get('/habits', (req, res) => {
  console.log('Returning habit list');
  res.send("Hello");
});

app.get('/test', (req, res) => {
  console.log('Returning random number');
  res.send(Math.random().toString());
});

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (e, r) => {
    console.log('Successfully queried the database')
    res.send(!!e ? e : r) //send error if exists.
  })
});

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
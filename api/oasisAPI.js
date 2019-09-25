const { Pool } = require('pg');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.argv.slice(2)[0]; //use docker args.
const app = express();

// TODO: Add repository.
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1KSA@fnc',
  port: 5432,
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
    res.send(r);
  })
});

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
//todo: migrate intoo oasisAPI & docker
"use strict";

const port = 3000;

const { Pool } = require('pg')
const express = require('express')
const app = express();


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1KSA@fnc',
  port: 5432,
})

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (e, r) => {
    res.send(r);
  })
});

app.listen(port, () => console.log(`App listening on port: ${port}!`))


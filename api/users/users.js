const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: databaseURL,
})

/* MIDDLEWARE */
app.use(bodyParser.json());

/**
 * Returns all the users from the database
 * TO BE DEPRECATED
 */
app.get('/users/GetUsers', (req, res) => {
    console.log('Returning user list');
    res.send("What up bitch");
  });

app.get('/users', (req, res) => {
    pool.query('SELECT NOW()', (e, r) => {
        console.log('Successfully queried the database')
        res.send(!!e ? e : r) //send error if exists.
    })
});

 /* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
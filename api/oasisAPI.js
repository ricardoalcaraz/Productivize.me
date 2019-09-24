const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.argv.slice(2)[0]; //use docker args.
const app = express();
// TODO: Add repository.

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());

//TODO: Figure out how to run up with all its needed dependencies
//TODO: Figure how to get rid of cors <= just delete it bro.
//TODO: Create an endpoint that will query the database <= server.js has it
/* API */
app.get('/habits', (req, res) => {
  console.log('Returning habit list');
  res.send("Hello");
});

app.get('/test', (req, res) => {
  console.log('Returning random number');
  res.send(Math.random().toString());
});

/* START */
app.listen(port, () => console.log(`App listening on port: ${port}`));
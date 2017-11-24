const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4200;

/* eslint no-console: 0 */
app.get('/', (req, res) => res.send('Hello From the Express Server!'));

app.listen(port, () => {
  console.log('hello world!');
});

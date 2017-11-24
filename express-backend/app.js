const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const itemRouter = require('./src/routes/itemRouter'); // custom router module
/* eslint no-console: 0 */
const app = express();
const port = 4200;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds145800.mlab.com:45800/blog')
  .then(() => {
    console.log('Connected to the mLab MongoDB');
  })
  .catch((err) => {
    console.error('WTF??? mLab App starting error:', err.stack);
    process.exit(1);
  });

app.get('/', (req, res) => res.send('Hello From the Express Server!'));

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('./items', itemRouter);

app.listen(port, () => {
  console.log('Express server is running on Port: ', port);
});

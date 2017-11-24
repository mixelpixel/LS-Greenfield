const express = require('express');

const app = express();
const port = 4200;

/* eslint no-console: 0 */
app.get('/', (req, res) => res.send('Hello From the Express Server!'));

app.listen(port, () => {
  console.log('hello world!');
});

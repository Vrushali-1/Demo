const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi Rusu Hello World!');
});

app.listen(9000, () => {
  console.log('Hi Rusu Server listening on port 9000');
});

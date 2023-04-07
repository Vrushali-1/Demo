require('dotenv').config(); // loads environment variables from .env file
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi Rusu Hello World!');
});

app.listen(PORT, () => {
  console.log(`Hi Rusu Server listening on port, ${PORT}` );
});

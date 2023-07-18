require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, MONGODB_LINK } = process.env;

const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});

mongoose.connect(MONGODB_LINK, {
  useNewUrlParser: true,
});

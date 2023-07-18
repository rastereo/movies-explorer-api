require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, MONGODB_LINK } = process.env;

const app = express();

mongoose.connect(MONGODB_LINK, {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});

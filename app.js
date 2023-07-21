require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');
const rateLimitConfig = require('./utils/rateLimitConfig');
const { errorHandler } = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const {
  PORT = 3000,
  MONGODB_LINK = 'mongodb://localhost:27017/bitfilmsdb',
} = process.env;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(requestLogger);

app.use(rateLimitConfig);

app.use(cors({
  credentials: true,
}));

app.use(helmet());

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

mongoose.connect(MONGODB_LINK, {
  useNewUrlParser: true,
});

app.listen(PORT);

const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(errorHandler);
module.exports = app;

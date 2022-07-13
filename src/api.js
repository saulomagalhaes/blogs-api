const express = require('express');
require('express-async-errors');

const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

module.exports = app;

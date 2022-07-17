const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;

// Core express Dependencies
const express = require('express');
const cors = require('cors');

// Swagger Dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger');

// Run on port
const _PORT = 2000;

// Import routes
const routes = require('./routes/index');

// express definition
const app = express();

/* Middleware */
app.use(cors({ origin: '*' }));
app.use(express.json());

/* Routes middleware */
app.use(routes);

/* Swagger definitions */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* Start server */
app.listen(_PORT, () => {
    console.log(`App listening on port ${_PORT}`);
});
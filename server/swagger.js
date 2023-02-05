/* Swagger setup configuration options */

const router = require('./routes');
const routes = require('./routes/swaggerRoutes');

const swaggerConfig = {
    swagger: "2.0.0",
    info: {
        version: "1.0.0",
        title: "API documentation",
        description: "Express js API documentation"
    },
    servers: [{
        url: "localhost:2000",
        description: "Express js dev instance"
    }],
    tags: [{
        name: "Store",
        description: "API for the app store object"
    }],
    host: "localhost:2000",
    basePath: "",
    schemas: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],

    paths: {...routes }

}

module.exports = swaggerConfig;
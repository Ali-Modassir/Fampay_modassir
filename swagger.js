const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "Youtube videos API",
      version: "1.0.0",
      description: "An get api to fetch youtube latest videos with search",
    }
  },
  apis: ['./swagger.yaml'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

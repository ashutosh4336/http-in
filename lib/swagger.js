import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'The HTTP Docs',
    version: '1.0.0',
    description: 'API documentation for the HTTP project',
  },
  servers: [{ url: 'https://thehttp.in' }, { url: 'http://localhost:3000' }],
};

const options = {
  swaggerDefinition,
  apis: ['app/api/**/*.js', 'app/api/**/*.ts', 'app/api/**/*.jsx'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

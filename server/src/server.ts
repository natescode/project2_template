const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
// import { sequelize } from './db/models/index.js';
import connection from './db/connection.js'
import * as swagger from './swagger.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

// Middleware to server docs pages
app.use('/docs', express.static('./docs'))

// Middleware to handle json
app.use(express.json());

// Routes
app.use('/', routes);

// Setup Swagger documentation
swagger.setupSwagger(app);

// connect to database. Create database / schema if needed.
// create sequelize connection
// sync sequelize
// start express server
connection().then((sequelize) => {
  sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/swagger`);
      console.log(`Type docs available at http://localhost:${PORT}/docs`);
    });
  });
})
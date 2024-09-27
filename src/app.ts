import express, { Application } from 'express';
import routes from './routes/index.js'
import * as swagger from './swagger';

const app: express.Express = express();

// Middleware to parse JSON from request body
app.use(express.json());

// Routes
app.use('/', routes);

// Setup Swagger documentation
swagger.setupSwagger(app);

// Start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

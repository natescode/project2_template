import express, { Application } from 'express';
import userRoutes from './routes/api/user/user';
import * as swagger from './swagger';

const app: express.Express = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Setup Swagger documentation
swagger.setupSwagger(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

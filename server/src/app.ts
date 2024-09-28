import express, { Application } from 'express';
import routes from './routes/index.js'
import * as swagger from './swagger.js';
import { UserModel } from './models/usermodel.js';

const app: express.Express = express();

// Middleware to parse JSON from request body
app.use(express.json());

// Middleware to server docs pages
app.use('/docs',express.static('./docs'))

// Routes
app.use('/', routes);

// Setup Swagger documentation
swagger.setupSwagger(app);

const me = new UserModel('natescode', 'password', true)
console.log(me)

// Start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/swagger`);
});

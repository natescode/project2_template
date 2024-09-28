import { Router, Request, Response } from 'express';
import apiRoutes from './api/index.js';
const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send(`<h1>API is running!</h1>
        <p>View <a href="/swagger">API docs</a></p>
        <p>View <a href="/docs">Type Docs</a></p>`)
});

router.use('/api', apiRoutes);

export default router;

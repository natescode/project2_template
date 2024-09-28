import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req: Request, res: Response) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});

export default router;

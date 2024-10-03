import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/user-controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', getAllUsers);

// /**
//  * @swagger
//  * /api/user/{id}
//  *   get:
//  *     summary: Get user by id
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.get('/:id', getUserById);

// /**
//  * @swagger
//  * /api/user
//  *   post:
//  *     summary: Create a new user
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.post('/', createUser);

// /**
//  * @swagger
//  * /api/user/{id}
//  *   put:
//  *     summary: update a user by id
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.put('/:id', updateUser);

// /**
//  * @swagger
//  * /api/user/{id}
//  *   delete:
//  *     summary: delete a user by id
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.delete('/:id', deleteUser);

export { router as userRouter };
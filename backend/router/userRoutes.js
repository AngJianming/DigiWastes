import express from 'express';
import { loginUser, registerUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// User login
router.post('/login', loginUser);

// User signup
router.post('/signup', registerUser);

// Get user profile
router.get('/:id', getUserProfile);

export default router;
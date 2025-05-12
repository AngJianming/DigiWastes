import express from 'express';
import { loginUser, registerUser, getUserProfile } from '../controllers/userController.js';
import { protect, requireRole } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/login', loginUser);
router.post('/signup', registerUser);

// Protected routes
router.get('/profile/:id', protect, getUserProfile);

// Admin only routes
router.get('/admin/users', protect, requireRole(['admin']), getUserProfile);

// Collector only routes
router.get('/collector/dashboard', protect, requireRole(['collector']), getUserProfile);

export default router;
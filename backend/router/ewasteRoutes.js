import express from 'express';
import { getEwasteFacilities, getCategories, getNearbyItems, createEwasteItem } from '../controllers/ewasteController.js';

const router = express.Router();

// Get all e-waste facilities
router.get('/', getEwasteFacilities);

// Get e-waste categories
router.get('/categories', getCategories);

// Get nearby e-waste items
router.get('/nearby', getNearbyItems);

// Create a new e-waste item
router.post('/', createEwasteItem);

export default router;
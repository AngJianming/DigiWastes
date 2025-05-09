import EWaste from '../models/ewasteModel.js';

// @desc    Get all e-waste facilities
// @route   GET /api/ewaste
// @access  Public
export const getEwasteFacilities = async (req, res) => {
  try {
    const facilities = await EWaste.find({});
    res.json(facilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get e-waste categories
// @route   GET /api/ewaste/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    const categories = await EWaste.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get e-waste items by location
// @route   GET /api/ewaste/nearby
// @access  Public
export const getNearbyItems = async (req, res) => {
  try {
    const { longitude, latitude, maxDistance = 10000 } = req.query;

    const items = await EWaste.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(maxDistance)
        }
      }
    }).populate('owner', 'username email');

    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new e-waste item
// @route   POST /api/ewaste
// @access  Private
export const createEwasteItem = async (req, res) => {
  try {
    const { name, category, subcategory, description, condition, estimatedPrice, location, images } = req.body;
    
    const ewasteItem = await EWaste.create({
      name,
      category,
      subcategory,
      description,
      condition,
      estimatedPrice,
      location,
      images,
      owner: req.user._id
    });

    res.status(201).json(ewasteItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
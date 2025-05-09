import mongoose from 'mongoose';

const ewasteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  description: String,
  condition: String,
  estimatedPrice: Number,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  images: [String],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Create a geospatial index on the location field
ewasteSchema.index({ location: '2dsphere' });

const EWaste = mongoose.model('EWaste', ewasteSchema);
export default EWaste;
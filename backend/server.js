import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './router/userRoutes.js';
import ewasteRoutes from './router/ewasteRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://digi-wastes.vercel.app'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/ewaste', ewasteRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('DigiWaste API is Running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
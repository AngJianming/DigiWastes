import mongoose from 'mongoose';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const createCollectorUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Check if collector already exists
    const collectorExists = await User.findOne({ email: 'angjianming2005@hotmail.com' });
    
    if (collectorExists) {
      console.log('Collector user already exists');
      return;
    }

    // Create collector user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('collect111', salt);

    const collector = await User.create({
      username: 'ang',
      email: 'angjianming2005@hotmail.com',
      password: hashedPassword,
      collector_id: 500,
      admin_id: 100,
      role: 'collector'
    });

    console.log('Collector user created successfully:', collector);
  } catch (error) {
    console.error('Error creating collector user:', error);
  }
  process.exit(0);
};

createCollectorUser();

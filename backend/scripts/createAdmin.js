import mongoose from 'mongoose';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@digiwastes.com' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin111', salt);

    const admin = await User.create({
      username: 'admin',
      email: 'admin@digiwastes.com',
      password: hashedPassword,
      admin_id: 100,
      isAdmin: true,
      role: 'admin'
    });

    console.log('Admin user created successfully:', admin);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
  process.exit(0);
};

createAdminUser();

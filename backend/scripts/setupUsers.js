import mongoose from 'mongoose';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const setupUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Setup admin user
    const adminExists = await User.findOne({ email: 'admin@digiwastes.com' });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const adminHashedPassword = await bcrypt.hash('admin111', salt);
      
      await User.create({
        username: 'admin',
        email: 'admin@digiwastes.com',
        password: adminHashedPassword,
        admin_id: 100,
        isAdmin: true,
        role: 'admin'
      });
      console.log('Admin user created successfully');
    }    // Setup collector user
    const collectorExists = await User.findOne({ email: 'angjianming2005@hotmail.com' });
    if (!collectorExists) {
      const salt = await bcrypt.genSalt(10);
      const collectorHashedPassword = await bcrypt.hash('collect111', salt);
      
      await User.create({
        username: 'ang',
        email: 'angjianming2005@hotmail.com',
        password: collectorHashedPassword,
        collector_id: 500,
        admin_id: 100,
        role: 'collector'
      });
      console.log('Collector user created successfully');
    }

    // Setup regular user
    const userExists = await User.findOne({ email: 'ang@gmail.com' });
    if (!userExists) {
      const salt = await bcrypt.genSalt(10);
      const userHashedPassword = await bcrypt.hash('user111', salt);
      
      await User.create({
        username: 'jianming',
        email: 'ang@gmail.com',
        password: userHashedPassword,
        user_id: 1,
        displayname: 'Ang Jianming',
        social: 'https://x.com/AngJianming',
        history: 'Viewed map; Recycled phone',
        role: 'user'
      });
      console.log('Regular user created successfully');
    }

    console.log('All required users have been set up!');
  } catch (error) {
    console.error('Error setting up users:', error);
  }
  process.exit(0);
};

setupUsers();

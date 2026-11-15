import mongoose from 'mongoose';
import { getEnvironment } from './environment.js';

const connectDB = async () => {
  const { mongoUri } = getEnvironment();

  if (!mongoUri) {
    console.warn('MongoDB URI not configured. Skipping database connection in development mode.');
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
};

export default connectDB;

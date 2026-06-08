import mongoose from 'mongoose';

const DEFAULT_DB_URI = 'mongodb://127.0.0.1:27017/octofit_db';

export const connectToDatabase = async (): Promise<string> => {
  const mongoUri = process.env.MONGODB_URI || DEFAULT_DB_URI;

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUri);
  }

  return mongoUri;
};

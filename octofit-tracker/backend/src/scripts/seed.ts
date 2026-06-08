import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectToDatabase } from '../config/database';
import { activities, teams, users, workouts } from '../data/mockData';

dotenv.config();

const seed = async () => {
  // Seed the octofit_db database with test data
  const mongoUri = await connectToDatabase();
  const db = mongoose.connection.db;

  if (!db) {
    throw new Error('Database connection is not available.');
  }

  await db.collection('users').deleteMany({});
  await db.collection('teams').deleteMany({});
  await db.collection('activities').deleteMany({});
  await db.collection('workouts').deleteMany({});

  await db.collection('users').insertMany(users);
  await db.collection('teams').insertMany(teams);
  await db.collection('activities').insertMany(activities);
  await db.collection('workouts').insertMany(workouts);

  console.log(`Seeded test data into ${mongoUri}`);
};

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Failed to seed database:', error);
    process.exit(1);
  });

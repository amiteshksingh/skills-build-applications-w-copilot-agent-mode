import { connectToDatabase } from './config/database';
import { API_BASE_URL, PORT, app } from './server';

const start = async () => {
  try {
    const dbUri = await connectToDatabase();
    console.log(`Connected to MongoDB at ${dbUri}`);

    app.listen(PORT, () => {
      console.log(`Backend listening on ${API_BASE_URL}`);
    });
  } catch (error) {
    console.error('Failed to start backend:', error);
    process.exit(1);
  }
};

void start();

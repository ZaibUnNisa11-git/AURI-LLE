import dotenv from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import { getEnvironment } from './config/environment.js';
import healthRoutes from './routes/healthRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const backendDirectory = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(backendDirectory, '.env') });
dotenv.config({ path: resolve(backendDirectory, '../.env'), override: false });

const app = express();
const env = getEnvironment();

app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());
app.get('/', (req, res) => res.json({ app: 'AURIÈLLE API', status: 'operational', environment: env.nodeEnv }));
app.use('/api', healthRoutes);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.port, () => console.log(`AURIÈLLE API running on http://localhost:${env.port}`));
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exitCode = 1;
  }
};

startServer();

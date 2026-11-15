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

// Keep the API health endpoint available even while MongoDB is starting or unavailable.
const server = app.listen(env.port, () => {
  console.log(`AURIÈLLE API running on http://localhost:${env.port}`);
});

connectDB().catch((error) => {
  console.error('MongoDB connection failed; API remains available:', error.message);
});

const shutdown = () => {
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

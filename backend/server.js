import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { getEnvironment } from './config/environment.js';
import healthRoutes from './routes/healthRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config({ path: '../.env' });

const app = express();
const env = getEnvironment();

app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    app: 'AURIÈLLE API',
    status: 'operational',
    environment: env.nodeEnv
  });
});

app.use('/api', healthRoutes);
app.use(errorHandler);

const port = env.port;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`AURIÈLLE API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  });

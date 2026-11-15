export const getEnvironment = () => ({
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || '',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  // Authentication is not enabled yet; never fall back to a hardcoded signing secret.
  jwtSecret: process.env.JWT_SECRET || ''
});

export default getEnvironment;

import mongoose from 'mongoose';

const healthController = async (req, res) => {
  const databaseState = mongoose.connection.readyState;
  const databaseStatus = ['disconnected', 'connected', 'connecting', 'disconnecting'][databaseState] || 'unknown';

  res.status(200).json({
    status: 'ok',
    database: databaseStatus,
    message: 'AURIÈLLE backend is available.'
  });
};

export default healthController;

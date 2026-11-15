const healthController = async (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'AURIÈLLE backend is connected and ready for storefront development.'
  });
};

export default healthController;

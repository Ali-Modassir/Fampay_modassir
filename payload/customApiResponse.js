const handleErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({ message, timestamp: new Date() });
};

const handleSuccessResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({ ...data, timestamp: new Date() });
};

module.exports = { handleErrorResponse, handleSuccessResponse };

const globalErrHandler = (err, req, res, next) => {
  return res.status(err.httpCode).json({
    _success: false,
    _errCode: err.errCode,
    _httpCode: err.httpCode,
    _message: err.message,
    _data: {},
  });
};

export default globalErrHandler

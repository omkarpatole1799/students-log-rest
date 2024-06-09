import { SERVER_ERROR } from "./errCodes.js";

const globalErrHandler = (err, req, res, next) => {
  err.httpCode = err.httpCode || 500;
  err.errCode = err.errCode || SERVER_ERROR;
  err.message = err.message || SERVER_ERROR;
  err.stack = err.stack || {};

  return res.status(err.httpCode).json({
    _success: false,
    _errCode: err.errCode,
    _httpCode: err.httpCode,
    _message: err.message,
    _stack: err.stack,
    _data: {},
  });
};

export default globalErrHandler;

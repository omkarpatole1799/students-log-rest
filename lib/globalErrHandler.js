import { SERVER_ERROR } from "./errCodes.js";

const globalErrHandler = (err, req, res, next) => {
  return res.status(err.httpCode).json({
    _success: false,
    _errCode: err.errCode || 500,
    _httpCode: err.httpCode || SERVER_ERROR,
    _message: err.message || SERVER_ERROR,
    _data: {},
  });
};

export default globalErrHandler;

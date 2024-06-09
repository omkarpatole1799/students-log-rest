class CustomErr extends Error {
  constructor(message, status, errCode) {
    super(message);
    this.httpCode = status;
    this.errCode = errCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomErr;

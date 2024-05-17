import { SERVER_ERROR } from "./errCodes.js";

class CustomErr extends Error {
  constructor(
    message = "Server error",
    status = 500,
    errCode = SERVER_ERROR
  ) {
    super(message);
    this.httpCode = status;
    this.errCode = errCode;
  }
}

export default CustomErr;

import dotenv from "dotenv";
dotenv.config();

import asyncErrHandler from "../../lib/asyncErrHandler.js";
import CustomErr from "../../lib/customErrHandler.js";
import { INVALID_TOKEN, UNAUTHORIZED } from "../../lib/errCodes.js";

import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      throw new CustomErr("Not authorized", 401, UNAUTHORIZED);
    }

    let [_bearer, token] = authHeader.split(" ");
    if (!token) {
      throw new CustomErr("Invalid token", 401, UNAUTHORIZED);
    }

    let _isTokenValid = await jwt.verify(token, `${process.env.JWT_SECRET}`);
    if (_isTokenValid) {
      next();
    }
  } catch (error) {
    // console.log(error.name)
    // if (error.name == "TokenExpiredError") {
    //   throw new CustomErr(error.message, 401, UNAUTHORIZED);
    // }
    next(error);
  }
};

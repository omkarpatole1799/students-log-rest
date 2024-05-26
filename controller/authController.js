import asyncErrHandler from "../lib/asyncErrHandler.js";
import CustomErr from "../lib/customErrHandler.js";
import { INVALID_DATA } from "../lib/errCodes.js";
import admin from "../models/admin.js";

import jwt from "jsonwebtoken";

export const checkLogin = asyncErrHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    throw new CustomErr("Invalid details passed", 400, INVALID_DATA);
  }

  let _loginRes = await admin.findOne({
    where: { email, password },
    raw: true,
  });

  console.log(_loginRes);

  if (!_loginRes) {
    throw new CustomErr("Invalid details passed", 400, INVALID_DATA);
  }

  let token = await jwt.sign(
    {
      userId: _loginRes.id,
      name: _loginRes.name,
      email: _loginRes.email,
      mobile: _loginRes.mobile,
      address: _loginRes.address,
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: "10h" }
  );

  console.log(token, "token===");

  return res.status(200).json({
    _success: true,
    _httpCode: 200,
    _message: "Authorized",
    _data: { _token: token },
  });
});

import dbConnection from "../config/db-connect.js";
import asyncErrHandler from "../lib/asyncErrHandler.js";
import CustomErr from "../lib/customErrHandler.js";
import {
  ALREADY_EXSISTS,
  CREATE_RESOURCE_FAILED,
  INVALID_DATA,
} from "../lib/errCodes.js";
import students from "../models/students.js";

export const addStudent = asyncErrHandler(async (req, res) => {
  let { sName, sMobile, sEmail, sAddress } = req.body;
  if (!sName || !sMobile || !sEmail || !sAddress) {
    throw new CustomErr("Invalid details", 400, INVALID_DATA);
  }

  let _isMobExsists = await students.findOne({
    where: { s_mob: sMobile },
    raw: true,
  });
  if (_isMobExsists) {
    throw new CustomErr("Mobile number already exsists", 409, ALREADY_EXSISTS);
  }

  let _createdUser = await students.create({
    s_name: sName,
    s_mob: sMobile,
    s_email: sEmail,
    s_address: sAddress,
  });

  if (!_createdUser) {
    throw new CustomErr("Failed to create user", 400, CREATE_RESOURCE_FAILED);
  }

  return res.status(201).json({
    _success: true,
    _httpCode: 201,
    _message: "Created user successfully",
    _data: { user: _createdUser.toJSON() },
  });
});

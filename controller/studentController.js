import dbConnection from "../config/db-connect.js";
import asyncErrHandler from "../lib/asyncErrHandler.js";
import CustomErr from "../lib/customErrHandler.js";
import {
  ALREADY_EXSISTS,
  CREATE_RESOURCE_FAILED,
  INVALID_DATA,
} from "../lib/errCodes.js";
import sessions from "../models/session.js";
import students from "../models/students.js";

export const addStudent = asyncErrHandler(async (req, res) => {
  let { sName, sMobile, sEmail, sAddress, tId } = req.body;
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
    teacher_id: tId,
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

export const studentsList = asyncErrHandler(async (req, res) => {
  let { teacherId } = req.body;

  if (!teacherId) {
    throw new CustomErr("Invalid Teacher Id", 400, INVALID_DATA);
  }

  let _students = await students.findAll({
    where: { teacher_id: teacherId },
    raw: true,
  });
  return res.status(200).json({
    _success: true,
    _httpCode: 200,
    _message: "Students List",
    _data: { _students },
  });
});

export const deleteStudent = asyncErrHandler(async (req, res) => {
  let { student_id } = req.body;
  if (!student_id) {
    throw new CustomErr("Invalid student ID", 400, INVALID_DATA);
  }

  let _searchStudRes = await students.findOne({
    where: {
      id: student_id,
    },
    raw: true,
  });

  if (!_searchStudRes) {
    throw new CustomErr("Invalid student ID", 400, INVALID_DATA);
  }

  let _deleteStudRes = await students.destroy({
    where: {
      id: student_id,
    },
  });

  await sessions.destroy({
    where: {
      student_id,
    },
  });

  return res.status(200).json({
    _success: true,
    _httpCode: 200,
    _message: "Delete Student successfully",
    _data: {},
  });
});

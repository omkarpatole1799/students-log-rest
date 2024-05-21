import asyncErrHandler from "../lib/asyncErrHandler.js";
import CustomErr from "../lib/customErrHandler.js";
import {
  ALREADY_EXSISTS,
  CREATE_RESOURCE_FAILED,
  INVALID_DATA,
} from "../lib/errCodes.js";
import admin from "../models/admin.js";
import sessions from "../models/session.js";

export const addAdmin = asyncErrHandler(async (req, res) => {
  let { name, mobile, email, address, password } = req.body;
  if (!name || !mobile || !email || !address || !password) {
    throw new CustomErr("Invalid details", 400, INVALID_DATA);
  }

  let _isAdminExsists = await admin.findOne({
    where: { mobile: mobile, email: email },
    raw: true,
  });

  if (_isAdminExsists) {
    throw new CustomErr("User already exsists", 409, ALREADY_EXSISTS);
  }

  let _createdAdmin = await admin.create({
    name,
    mobile,
    email,
    address,
    password,
  });

  if (!_createdAdmin) {
    throw new CustomErr("Failed to create user", 400, CREATE_RESOURCE_FAILED);
  }

  return res.status(201).json({
    _success: true,
    _httpCode: 201,
    _message: "Created admin successfully",
    _data: { admin: _createdAdmin.toJSON() },
  });
});

export const addSession = asyncErrHandler(async (req, res) => {
  let {
    time_start,
    time_end,
    topic_discussed,
    home_work,
    video_url,
    student_id,
    session_date,
  } = req.body;

  if (
    (!time_start,
    !time_end,
    !topic_discussed,
    !home_work,
    !video_url,
    !student_id,
    !session_date)
  ) {
    throw new CustomErr("Invalid details", 400, INVALID_DATA);
  }

  let _sessCreateRes = await sessions.create({
    time_start,
    time_end,
    topic_discussed,
    home_work,
    video_url,
    student_id,
    session_date,
  });

  if (!_sessCreateRes) {
    throw new CustomErr("Failed to add session ", 400, CREATE_RESOURCE_FAILED);
  }

  return res.status(201).json({
    _success: true,
    _httpCode: 201,
    _message: "Session added successfully",
    _data: { session: _sessCreateRes.toJSON() },
  });
});

export const getSession = asyncErrHandler(async (req, res) => {
  let { student_id } = req.body;
  if (!student_id) {
    throw new CustomErr("Invalid student id", 400, INVALID_DATA);
  }

  let _sessionList = await sessions.findAll({
    where: {
      student_id,
    },
    raw: true,
  });

  return res.status(201).json({
    _success: true,
    _httpCode: 201,
    _message: "Session details",
    _data: { _sessions: _sessionList },
  });
});

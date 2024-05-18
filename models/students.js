import { BIGINT, DATE, INTEGER, STRING } from "sequelize";

import dbConnection from "../config/db-connect.js";

const students = dbConnection.define("students", {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  s_name: {
    type: STRING,
    allowNull: false,
  },
  s_mob: {
    type: STRING,
    allowNull: false,
  },
  s_email: {
    type: STRING,
  },
  s_address: {
    type: STRING,
  },
  s_course: {
    type: STRING,
  },
  teacher_id: {
    type: INTEGER,
  },
});

export default students;

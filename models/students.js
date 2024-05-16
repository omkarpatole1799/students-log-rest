import { BIGINT, DATE, INTEGER, STRING } from "sequelize";

import dbConnection from "../config/db-connect";

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
  s_address: {
    type: STRING,
    allowNull: false,
  },
  s_course: {
    type: STRING,
  },
});

export default students
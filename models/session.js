import { Sequelize } from "sequelize";
import dbConnection from "../config/db-connect.js";

const sessions = dbConnection.define("sessions", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  time_start: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  time_end: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  topic_discussed: {
    type: Sequelize.TEXT("long"),
    allowNull: false,
  },
  home_work: {
    type: Sequelize.TEXT("long"),
    allowNull: false,
  },
  video_url: {
    type: Sequelize.TEXT("long"),
    allowNull: false,
  },
  session_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default sessions;

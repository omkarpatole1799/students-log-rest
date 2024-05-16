import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const { DB_NAME, DB_PASS, DB_USER, DB_HOST } = process.env;
const dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  freezeTableName: true,
});

try {
  await dbConnection.authenticate();
  console.log("db connection successful");
} catch (error) {
  console.log("Unable to connect to db", error);
}

export default dbConnection;

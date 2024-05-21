import express from "express";
import {
  addStudent,
  deleteStudent,
  studentsList,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/add", addStudent);

router.post("/list", studentsList);

router.delete("/delete", deleteStudent);

export default router;

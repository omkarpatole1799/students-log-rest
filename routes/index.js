import express from "express";
import studentRouter from './studentRoutes.js'
const router = express.Router();

router.use("/student", studentRouter);

export default router;

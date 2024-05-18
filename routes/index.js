import express from "express";
import studentRouter from './studentRoutes.js'
import adminRouter from './adminRouter.js'
const router = express.Router();

router.use("/student", studentRouter);

router.use("/admin", adminRouter)

export default router;

import express from "express";
import studentRouter from "./studentRoutes.js";
import adminRouter from "./adminRouter.js";
import authRoutes from "./authRoutes.js";
import { checkAuth } from "./middlewares/checkAuth.js";
const router = express.Router();

router.use("/student", checkAuth, studentRouter);

router.use("/admin", adminRouter);

router.use("/auth", authRoutes);

export default router;

import express from "express";
import studentRouter from "./studentRoutes.js";
import adminRouter from "./adminRouter.js";
import authRoutes from "./authRoutes.js";
import { checkAuth } from "./middlewares/checkAuth.js";
const router = express.Router();

router.get("/check-status", (req, res, next) => {
  return res.status(200).json({
    _success: true,
    _status: 200,
    _message: "Server is live",
  });
});

router.use("/student", checkAuth, studentRouter);

router.use("/admin", adminRouter);

router.use("/auth", authRoutes);

export default router;

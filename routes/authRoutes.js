import express from "express";
import { checkLogin } from "../controller/authController.js";
const router = express.Router();

router.post("/login", checkLogin);

export default router;

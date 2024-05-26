import express from "express";
import {
  addAdmin,
  addSession,
  getSession,
} from "../controller/adminController.js";
import { checkAuth } from "./middlewares/checkAuth.js";

const router = express.Router();

router.post("/add", addAdmin);

router.post("/add-session", checkAuth, addSession);
router.post("/get-session", checkAuth, getSession);

export default router;

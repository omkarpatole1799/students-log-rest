import express from "express";
import {
  addAdmin,
  addSession,
  getSession,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/add", addAdmin);

router.post("/add-session", addSession);
router.post("/get-session", getSession);

export default router;

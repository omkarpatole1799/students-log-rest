import express from "express";
import {
  addAdmin,
  addSession,
  deleteSession,
  getSession,
} from "../controller/adminController.js";
import { checkAuth } from "./middlewares/checkAuth.js";

const router = express.Router();

router.post("/add", addAdmin);

router.post("/add-session", checkAuth, addSession);
router.post("/get-session", checkAuth, getSession);
router.delete("/delete-session", checkAuth, deleteSession);

export default router;

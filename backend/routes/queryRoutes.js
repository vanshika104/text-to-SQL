import express from "express";
import { executeQuery } from "../controllers/queryController.js";

const router = express.Router();

router.post("/execute", executeQuery);

export default router;
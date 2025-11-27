import express from "express";
import { fetchSpecialists } from "../controllers/specialistController.js";

const router = express.Router();

router.get("/", fetchSpecialists);

export default router;

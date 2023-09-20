import express from "express";
import verifyToken from "../middleware/auth.js";
import { addAppointment } from "../controllers/appointment.js";
const router = express.Router();

router.use(verifyToken);
router.post("/addNewAppointment", addAppointment);

export default router;

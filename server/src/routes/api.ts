import express from "express";
import auth from "./auth.js";
import customers from "./customers.js";
import appointment from "./appointment.js";
const router = express.Router();

router.use("/auth", auth);
router.use("/customers", customers);
router.use("/appointment", appointment);

export default router;

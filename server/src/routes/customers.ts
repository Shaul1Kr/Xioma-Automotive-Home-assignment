import express from "express";
import { getAllCustomers, getAllMeetings } from "../controllers/customers.js";
import verifyToken from "../middleware/auth.js";
const router = express.Router();

router.use(verifyToken);
router.get("/getCustomers", getAllCustomers);
router.get("/getMeetings/:id", getAllMeetings);

export default router;

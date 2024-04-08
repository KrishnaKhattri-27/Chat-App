import express from "express";
import { sendMessaage } from "../controller/messageController.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.post("/send/:id",protectRoute,sendMessaage)

export default router;
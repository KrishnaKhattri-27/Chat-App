import express from "express";
import { getMessages, sendMessaage } from "../controller/messageController.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();


router.get("/get/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessaage)

export default router;
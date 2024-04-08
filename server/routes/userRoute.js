import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/", protectRoute, userController);

export default router;

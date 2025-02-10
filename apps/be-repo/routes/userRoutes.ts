import express from "express";
import UserController from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware)
router.get("/fetch-user-data", UserController.getAllUsers);
router.get("/fetch-user-data/:userId", UserController.getUserData);
router.put("/update-user-data", UserController.updateUser);

export default router;

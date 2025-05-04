import express from "express";
import {
  registerUser,
  loginUser,
  getAllUser,
  getUserProfile,
} from "../controllers/usersController.js";

const userRouter = express.Router();
// Auth User
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//Profile
userRouter.get("/", getAllUser);
userRouter.get("/:userId", getUserProfile);

export default userRouter;

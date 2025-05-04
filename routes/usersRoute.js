const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUser,
} = require("../controllers/usersController");

// Auth User
router.post("/register", registerUser);
router.post("/login", loginUser);

//Profile
router.get("/", getAllUser);
router.get("/:userId", getUserProfile);

module.exports = router;

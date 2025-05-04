const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUser,
} = require("../controllers/usersController");

// Get All User
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Auth User
router.post("/register", registerUser);
router.post("/login", loginUser);

//Profile
router.get("/profile", getAllUser);
router.get("/profile/:userId", getUserProfile);

module.exports = router;

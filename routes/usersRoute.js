const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const { registerUser, loginUser } = require("../controllers/usersController");

// Get All User
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

module.exports = router;

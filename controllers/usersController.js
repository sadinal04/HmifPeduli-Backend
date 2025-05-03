const usersModel = require("../models/usersModel");
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All field is required." });
    }

    const { name, email, password } = req.body;
    const isAlreadyRegistered = await usersModel.findOne({ email });
    if (isAlreadyRegistered) {
      return res
        .status(400)
        .json({ message: "User with this email is already registered" });
    } else {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new usersModel({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      res.status(201).json({
        message: "Succesfull Register",
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };

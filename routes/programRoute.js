const express = require("express");
const router = express.Router();
const Program = require("../models/donationProgramModels");
const { makeProgram } = require("../controllers/programController");

router.post("/makeProgram", makeProgram);

module.exports = router;

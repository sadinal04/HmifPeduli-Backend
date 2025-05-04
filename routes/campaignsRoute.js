const express = require("express");
const router = express.Router();
const Program = require("../models/campaignsModel");
const { makeProgram } = require("../controllers/campaignController");

router.post("/makeProgram", makeProgram);

module.exports = router;

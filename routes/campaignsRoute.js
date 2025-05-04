const express = require("express");
const router = express.Router();
const Program = require("../models/campaignsModel");
const {
  makeCampaign,
  getAllCampaign,
} = require("../controllers/campaignController");

router.get("/", getAllCampaign);
router.post("/makeCampaign", makeCampaign);

module.exports = router;

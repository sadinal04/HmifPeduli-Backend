import express from "express";
import {
  createCampaign,
  getAllCampaign,
  getCampaignDetail,
} from "../controllers/campaignController.js";

const campaignRouter = express.Router();

campaignRouter.get("/", getAllCampaign);
campaignRouter.post("/createCampaign", createCampaign);
campaignRouter.get("/:campaignId", getCampaignDetail);

export default campaignRouter;

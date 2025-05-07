import express from "express";
import {
  createCampaign,
  editCampaign,
  getAllCampaign,
  getCampaignDetail,
} from "../controllers/campaignController.js";

const campaignRouter = express.Router();

campaignRouter.get("/", getAllCampaign);
campaignRouter.post("/createCampaign", createCampaign);
campaignRouter.get("/:campaignId", getCampaignDetail);
campaignRouter.put("/:campaignId", editCampaign);

export default campaignRouter;

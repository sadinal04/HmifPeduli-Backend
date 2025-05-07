import express from "express";
import {
  createCampaign,
  deleteCampaign,
  editCampaign,
  getAllCampaign,
  getCampaignDetail,
} from "../controllers/campaignController.js";

const campaignRouter = express.Router();

campaignRouter.get("/", getAllCampaign);
campaignRouter.post("/createCampaign", createCampaign);
campaignRouter.get("/:campaignId", getCampaignDetail);
campaignRouter.put("/editCampaign/:campaignId", editCampaign);
campaignRouter.delete("/deleteCampaign/:campaignId", deleteCampaign);

export default campaignRouter;

import express from "express";
import {
  createCampaign,
  getAllCampaign,
} from "../controllers/campaignController.js";

const campaignRouter = express.Router();

campaignRouter.get("/", getAllCampaign);
campaignRouter.post("/createCampaign", createCampaign);

export default campaignRouter;

import express from "express";
import {
  makeCampaign,
  getAllCampaign,
} from "../controllers/campaignController.js";

const campaignRouter = express.Router();

campaignRouter.get("/", getAllCampaign);
campaignRouter.post("/makeCampaign", makeCampaign);

export default campaignRouter;

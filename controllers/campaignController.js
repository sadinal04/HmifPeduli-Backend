import campaignsModel from "../models/campaignsModel.js";

export const makeCampaign = async (req, res) => {
  try {
    const {
      programName,
      description,
      fundTarget,
      startDate,
      endDate,
      picture,
      category,
    } = req.body;
    if (
      !programName ||
      !fundTarget ||
      !startDate ||
      !endDate ||
      !picture ||
      !category
    ) {
      res.status(400).json({ message: "Please fill all required fields" });
    } else {
      const newCampaign = new campaignsModel({
        programName,
        description,
        fundTarget,
        startDate,
        endDate,
        picture,
        category,
      });

      const savedCampaign = await newCampaign.save();
      res.status(201).json({
        message: "New Program Created",
        user: {
          id: savedCampaign._id,
          programName: savedCampaign.programName,
          programStatus: savedCampaign.programStatus,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCampaign = async (req, res) => {
  try {
    const campaigns = await campaignsModel.find();
    const campaignData = Promise.all(
      campaigns.map(async (campaign) => {
        return {
          campaign: {
            name: campaign.campaignName,
            target: campaign.fundTarget,
            category: campaign.category,
          },
          campaignId: campaign._id,
        };
      })
    );
    res.status(200).json(await campaignData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getCampaignDetail = async(req, res)

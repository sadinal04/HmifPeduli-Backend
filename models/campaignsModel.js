const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  fundTarget: {
    type: Number,
    required: true,
  },
  fundCollected: {
    type: Number,
    default: 0,
  },
  campaignStatus: {
    type: String,
    enum: ["Active", "Completed", "Abort"],
    default: "Active",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Kesehatan", "Edukasi", "Kemanusiaan"],
    required: true,
  },
  // adminId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Admin",
  // },
});

module.exports = mongoose.model("Campaign", campaignSchema);

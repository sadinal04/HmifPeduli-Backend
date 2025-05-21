import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
  campaignName: {
    type: String,
    required: true,
  },
  totalIncomingDonations: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  allocations: [
    {
      purpose: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 0,
      },
    }
  ],
  totalAllocatedFunds: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
    min: 0,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  category: {
    type: String,
    enum: ["Kesehatan", "Edukasi", "Kemanusiaan", "Lainnya"],
    default: "Lainnya",
  },
  bankInfo: {
    bankName: String,
    accountNumber: String,
    accountName: String,
    bankCode: String,
  },
  contactPerson: {
    name: String,
    phone: String,
    email: String,
  },
  reportDate: {
    type: Date,
    default: Date.now,
  },
  campaignImages: {
    type: [String], // array gambar
    required: false,
  },
  reportStatus: {
    type: String,
    enum: ["Active", "Completed", "Abort"],
    default: "Active",
  },

});

export default mongoose.model("Report", reportSchema);

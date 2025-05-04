import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  totalIncomingDonations: {
    type: Number,
    default: 0,
  },
  totalAllocatedFunds: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
    min: 0,
  },
  reportDate: {
    type: Date,
    default: Date.now,
  },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model("Report", reportSchema);

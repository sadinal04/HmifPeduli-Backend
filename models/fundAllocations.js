const mongoose = require("mongoose");

const allocatedFundsSchema = new mongoose.Schema({
  allocationDate: {
    type: Date,
    default: Date.now,
  },
  totalAllocated: {
    type: Number,
    default: 0,
    min: 0,
  },
  description: {
    type: String,
  },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Allocated = mongoose.model("Allocated", allocatedFundsSchema);
module.exports = Allocated;

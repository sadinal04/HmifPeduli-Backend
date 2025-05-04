const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Allocated", allocationSchema);

const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  programName: {
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
    required: true,
  },
  programStatus: {
    type: String,
    enum: ["On Progress", "Completed", "Abort"],
    default: "On Progress",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;

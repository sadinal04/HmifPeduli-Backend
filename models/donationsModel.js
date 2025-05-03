const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donaturName: {
    type: String,
    default: "Orang Berjasa",
  },
  amount: {
    type: Number,
    required: true,
  },
  donaturId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  donationStatus: {
    type: String,
    enum: ["Pending", "Succesfull", "Abort"],
    default: "Pending",
  },
  paymentMethod: {
    type: String,
    enum: ["BCA", "BSI"],
  },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;

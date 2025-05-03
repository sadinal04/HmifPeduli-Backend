const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalDonasi: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  // historiDonasi: [
  //   {
  //     tanggal: Date,
  //     jumlah: Number,
  //     // program: { type:mongoose}
  //   },
  // ],
});

module.exports = mongoose.model("User", userSchema);

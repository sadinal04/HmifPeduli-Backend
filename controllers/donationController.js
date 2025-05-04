const Donasi = require("../models/donationsModel");

const getRecentDonasi = async (req, res) => {
  try {
    const recent = await Donasi.find({ status: "Successful" })
      .sort({ donationDate: -1 })
      .limit(4)
      .populate("donaturId", "nama");
    res.status(200).json(recent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports({ getRecentDonasi });

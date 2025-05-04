import donationsModel from "../models/donationsModel.js";

export const getRecentDonasi = async (req, res) => {
  try {
    const recent = await donationsModel
      .find({ status: "Successful" })
      .sort({ donationDate: -1 })
      .limit(4)
      .populate("donaturId", "nama");
    res.status(200).json(recent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

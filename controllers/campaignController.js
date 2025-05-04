const Program = require("../models/campaignsModel");
const Admin = require("../models/adminsModel");
const donationProgramModels = require("../models/campaignsModel");

const makeProgram = async (req, res) => {
  try {
    if (
      !req.body ||
      !req.body.programName ||
      !req.body.fundTarget ||
      !req.body.startDate ||
      !req.body.endDate ||
      !req.body.picture ||
      !req.body.category
    ) {
      res.status(400).json({ message: "Please fill all required fields" });
    } else {
      const {
        programName,
        description,
        fundTarget,
        startDate,
        endDate,
        picture,
        category,
      } = req.body;
      const newProgram = new donationProgramModels({
        programName,
        description,
        fundTarget,
        startDate,
        endDate,
        picture,
        category,
      });

      const savedProgram = await newProgram.save();
      res.status(201).json({
        message: "New Program Created",
        user: {
          id: savedProgram._id,
          programName: savedProgram.programName,
          programStatus: savedProgram.programStatus,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getProgramDetail = async(req, res)=> {
//     try {
//         const {id} = req.params

//     } catch (err){

//     }
// };

module.exports = { makeProgram };

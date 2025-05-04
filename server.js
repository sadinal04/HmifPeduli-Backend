require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const usersRouter = require("./routes/usersRoute");
const programRouter = require("./routes/campaignsRoute");

app.use("/users", usersRouter);
app.use("/programs", programRouter);

app.listen(PORT, () => console.log(`Server Started in port: ${PORT}`));

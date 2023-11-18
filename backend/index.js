const connectDB = require("./database/connectDB.js");

const express = require("express");
const path = require("path");

const studentRoutes = require("./routes/studentRoutes.js");

const app = express();
app.use(express.json());
app.set("x-powered-by", false);

app.use("/student", studentRoutes);

require("dotenv").config();

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
    connectDB();
  } catch (err) {
    console.log(err);
  }
};
start();

app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  albumNumber: String,
  firstname: String,
  lastname: String,
  email: String,
  internship: String,
  date: String,
  company: String,
  adress: String,
  phoneNumber: Number,
  isAccept: Boolean,
});

module.exports = mongoose.model("Student", StudentSchema);

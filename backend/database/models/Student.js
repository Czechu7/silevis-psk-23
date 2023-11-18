const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  albumNumber: String,
  firstName: String,
  lastName: String,
  email: String,
  internship: String,
  firstDate: String,
  secondDate: String,
  changeDateRequest: { type: Boolean, default: false },
  company: String,
  adress: String,
  phoneNumber: Number,
  isAccept: Boolean,
});

module.exports = mongoose.model("Student", StudentSchema);

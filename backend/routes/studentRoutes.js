const express = require("express");
const router = express.Router();

const {
  saveStudent,
  updateAccept,
  changeDate,
  getAllStudents,
} = require("../controller/studentController");

router.route("/get-students").get(getAllStudents);
router.route("/save-student").post(saveStudent);
router.route("/update-accept").patch(updateAccept);
router.route("/update-date").patch(changeDate);

module.exports = router;


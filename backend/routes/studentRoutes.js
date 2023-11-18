const express = require("express");
const router = express.Router();

const {
  saveStudent,
  updateAccept,
  changeDate,
  getAllStudents,
  rejectUpdateDate,
  requestUpdateDate,
} = require("../controller/studentController");

router.route("/get-students").get(getAllStudents);
router.route("/save-student").post(saveStudent);
router.route("/update-accept").patch(updateAccept);
router.route("/request-update-date").patch(requestUpdateDate);
router.route("/reject-update-date").patch(rejectUpdateDate);
router.route("/update-date").patch(changeDate);

module.exports = router;

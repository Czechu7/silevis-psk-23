const express = require("express");
const router = express.Router();

const { saveStudent } = require("../controller/studentController");

router.route("/savestudent").post(saveStudent);

module.exports = router;


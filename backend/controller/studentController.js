const Student = require("../database/models/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (!students) {
      return res.status(400);
    }

    const newStudents = students.map((elem) => {
      return {
        albumNumber: elem.albumNumber,
        firstname: elem.firstname,
        lastname: elem.lastname,
        email: elem.email,
        internship: elem.internship,
        date: elem.date,
        company: elem.company,
        adress: elem.adress,
        phoneNumber: elem.phoneNumber,
        isAccept: elem.isAccept,
      };
    });
    res.json({ students: newStudents });
  } catch (error) {
    return res.status(400);
  }
};

const saveStudent = async (req, res) => {
  const {
    albumNumber,
    firstname,
    lastname,
    email,
    internship,
    date,
    company,
    adress,
    phoneNumber,
    isAccept,
  } = req.body;

  if (!albumNumber) {
    return res.status(400);
  }

  try {
    const student = await Student.create({
      albumNumber,
      firstname,
      lastname,
      email,
      internship,
      date,
      company,
      adress,
      phoneNumber,
      isAccept,
    });

    if (!student) {
      res.sendStatus(400);
    }
  } catch (err) {
    return res.status(400);
  }

  res.sendStatus(200);
};

const updateAccept = async (req, res) => {
  const { albumNumber, isAccept } = req.body;

  if (!albumNumber) {
    return res.status(400);
  }

  try {
    const updatedStudent = await Student.updateOne(
      { albumNumber },
      { isAccept: true }
    );

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.status(400);
  }
};
const changeDate = async (req, res) => {
  const { albumNumber, date } = req.body;

  if (!albumNumber || !date) {
    return res.status(400);
  }

  try {
    const updatedStudent = await Student.updateOne({ albumNumber }, { date });

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.status(400);
  }
};

module.exports = { getAllStudents, saveStudent, updateAccept, changeDate };


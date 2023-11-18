const Student = require("../database/models/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (!students) {
      return res.sendStatus(400);
    }

    const newStudents = students.map((elem) => {
      return {
        albumNumber: elem.albumNumber,
        firstName: elem.firstName,
        lastName: elem.lastName,
        email: elem.email,
        internship: elem.internship,
        firstDate: elem.firstDate,
        secondDate: elem.secondDate,
        changeDateRequest: elem.changeDateRequest,
        company: elem.company,
        adress: elem.adress,
        phoneNumber: elem.phoneNumber,
        isAccept: elem.isAccept,
      };
    });
    res.json({ students: newStudents });
  } catch (error) {
    return res.sendStatus(400);
  }
};

const saveStudent = async (req, res) => {
  const {
    albumNumber,
    firstName,
    lastName,
    email,
    internship,
    firstDate,
    // secondDate,
    // changeDateRequest,
    company,
    adress,
    phoneNumber,
    isAccept,
  } = req.body;

  if (!albumNumber) {
    return res.sendStatus(400);
  }

  const isStudentExist = await User.findOne({ albumNumber });

  if (isStudentExist) {
    return res.sendStatus(409);
  }

  try {
    const student = await Student.create({
      albumNumber,
      firstName,
      lastName,
      email,
      internship,
      firstDate,
      secondDate: null,
      changeDateRequest: false,
      company,
      adress,
      phoneNumber,
      isAccept,
    });

    if (!student) {
      res.sendStatus(400);
    }
  } catch (err) {
    return res.sendStatus(400);
  }

  res.sendStatus(200);
};

const updateAccept = async (req, res) => {
  const { albumNumber, isAccept } = req.body;

  if (!albumNumber) {
    return res.sendStatus(400);
  }

  try {
    const updatedStudent = await Student.updateOne(
      { albumNumber },
      { isAccept }
    );

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

const requestUpdateDate = async (req, res) => {
  const { albumNumber, secondDate } = req.body;

  if (!albumNumber) {
    return res.sendStatus(400);
  }

  try {
    const updatedStudent = await Student.updateOne(
      { albumNumber },
      { changeDateRequest: true, secondDate }
    );

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

const rejectUpdateDate = async (req, res) => {
  const { albumNumber } = req.body;

  if (!albumNumber) {
    return res.sendStatus(400);
  }

  try {
    const updatedStudent = await Student.updateOne(
      { albumNumber },
      { changeDateRequest: false, secondDate: null }
    );

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

const changeDate = async (req, res) => {
  const { albumNumber, secondDate } = req.body;

  if (!albumNumber || !secondDate) {
    return res.sendStatus(400);
  }

  try {
    const updatedStudent = await Student.updateOne(
      { albumNumber },
      { firstDate: secondDate, changeDateRequest: false, secondDate: null }
    );

    if (!updatedStudent) {
      res.sendStatus(400);
    }

    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

module.exports = {
  getAllStudents,
  saveStudent,
  updateAccept,
  changeDate,
  rejectUpdateDate,
  requestUpdateDate,
};

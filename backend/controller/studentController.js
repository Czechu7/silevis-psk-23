const Student = require("../database/models/Student");

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

  //   console.log(
  //     albumNumber,
  //     firstname,
  //     lastname,
  //     email,
  //     internship,
  //     date,
  //     company,
  //     adress,
  //     phoneNumber,
  //     isAccept
  //   );

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
  } catch (err) {
    console.log(err);
  }

  res.sendStatus(200);
};

module.exports = { saveStudent };

// {
//     "albumNumber": 1234,
//     "firstname": "jan" ,
//     "lastname": "kowalski",
//     "email": "kowalski@gmail",
//     "internship": "lipcowe",
//     "date": "01.07-11.08",
//     "company": "abc",
//     "adress" :"abcd",
//     "phoneNumber" :"12345",
//     "isAccept": "true"
// }


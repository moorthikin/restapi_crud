const pool = require('../../db');
const quries = require('./quries');

const getStudents = (req, res) => {
  pool.query(quries.getStudents, (error, results) => {

    if (error) throw error;
    res.status(200).json(results.rows);
  })
};


const addStudents = (req, res) => {
  const { email, name, age, dob } = req.body;

  pool.query(quries.checkEmailexist, [email], (error, results) => {
    //for check if email already exist in the Database and we need to return some response to the user

    if (results.rows.length) {

      res.send("Email Already exist");
    }
    pool.query(quries.addStudents, [name, email, age, dob], (results, error) => {



      if (error) throw error;

      res.status(200).send("Student added sucessfully!");

    })

  })


}

const getStudentsbyId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(quries.getStudentsbyId, [id], (error, results) => {

    if (error) throw error;
    res.status(200).json(results.rows);

  })
}

const deleteStudents = (req, res) => {

  const id = parseInt(req.params.id);
  pool.query(quries.getStudentsbyId, [id], (error, results) => {
    const noStudents = !results.rows.length;

    if (noStudents) {
      res.send("No students Data found");
    }
    pool.query(quries.deleteStudentsbyId, [id], (error, results) => {

      if (error) throw error;

      res.status(200).send("Student data Deleted Successfully");
    })


  })
}

const updateStudentsbyId = (req, res) => {

  const id = parseInt(req.params.id);
  const {name } = req.body;
  pool.query(quries.getStudentsbyId, [id], (error, results) => {

    const noStudents = !results.rows.length;
    if (noStudents) {

      res.send("no students data found!");
    }
    pool.query(quries.updateStudentsbyId, [ name , id], (error, results) => {

      if (error) throw error;
      res.status(200).send("student data updated successfully");
    });

  })


}



module.exports = {
  getStudents,
  getStudentsbyId,
  addStudents,
  deleteStudents,
  updateStudentsbyId
};
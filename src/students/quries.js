


const getStudents = "SELECT * FROM students";
const getStudentsbyId = "SELECT * FROM students WHERE id = $1";
const checkEmailexist = "SELECT s FROM students s WHERE s.email = $1";
const addStudents = "INSERT INTO students (name , email , age , dob) VALUES ($1 , $2, $3, $4)";
const deleteStudentsbyId = "DELETE FROM students WHERE id = $1";
const updateStudentsbyId = "UPDATE students SET name = $1 WHERE id = $2";
module.exports = {


  getStudents,
  getStudentsbyId,
  checkEmailexist,
  addStudents,
  deleteStudentsbyId,
  updateStudentsbyId,

}
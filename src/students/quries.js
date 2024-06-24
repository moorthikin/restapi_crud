


const getStudents = "SELECT * FROM students";
const getStudentsbyId = "SELECT * FROM students WHERE id = $1";

module.exports = {


  getStudents,
  getStudentsbyId,


}
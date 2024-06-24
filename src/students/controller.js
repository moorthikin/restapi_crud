const pool = require('../../db');
const quries = require('./quries');

const getStudents = (req, res) => {
  pool.query(quries.getStudents, (error, results) => {

    if (error) throw error;
    res.status(200).json(results.rows);
  })
};


const getStudentsbyId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(quries.getStudentsbyId, [id], (error, results) => {

    if (error) throw error;
    res.status(200).json(results.rows);

  })
}

module.exports = {
  getStudents,
  getStudentsbyId,
};
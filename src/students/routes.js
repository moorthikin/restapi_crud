const { Router } = require("express");
const controller = require('./controller');
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudents);
router.get("/:id", controller.getStudentsbyId);
router.put("/id", controller.updateStudentsbyId);
router.delete("/:id", controller.deleteStudents);

module.exports = router;
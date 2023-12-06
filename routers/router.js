const express = require ("express");

const router = express.Router();

const {createstudent, getAll, getOne, updateStudent, deleteStudent, makeAdmin} = require("../controller/controller");

const requestInfo = require("../middleware/requestInfo");

router.post("/create", requestInfo, createstudent);

router.get("/all", requestInfo, getAll);

router.get("/one/:studentId", requestInfo, getOne);

router.put("/update/:studentId", requestInfo, updateStudent);

router.delete("/delete/:studentId", requestInfo, deleteStudent);

router.put("/makeAdmin/:studentId", requestInfo, makeAdmin)

module.exports = router;

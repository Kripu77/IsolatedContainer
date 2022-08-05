const express = require('express');
const router = express.Router();
const {
  students,
  addStudent,
  singleStudent,
  updateStudent,
  deleteStudent,
} = require("../handlers/controllers");

//get all students
router.get("/", students);

//get single student
router.get("/:no", singleStudent)

//add new students
router.post("/", addStudent);

//update existing students details
router.put("/", updateStudent);

//delete student details
router.delete("/:no", deleteStudent);


module.exports ={router}
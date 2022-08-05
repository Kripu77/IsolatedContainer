const { application } = require("express");
const { data } = require("../data/road");

//home route
const home = (req, res) => {
  res.status(200).json({ success: true, data: "Welcome to the homepage" });
};

//get the list of students

const students = (req, res) => {
  if (data) {
    res.status(200).json({ success: true, data: data });
  } else {
    res.stautus(401).json({ error: true, data: "Please contact admin" });
  }
};

//add a new student
const addStudent = (req, res) => {
  const { no, name, age, tel, email } = req.body;

  if (no && name && age && tel && email) {
    res
      .status(201)
      .json({ success: true, data: [...data, { no, name, age, tel, email }] });
  } else {
    res
      .status(401)
      .json({ error: true, data: "Please supply values in the field" });
  }
};

//single student
const singleStudent = (req, res) => {
  const { no } = req.params;

  let singleStudentData = data.find((student) => {
    return student.no === Number(no);
  });

  if (singleStudentData) {
    res.status(201).json({ success: true, data: singleStudentData });
  } else {
    res.status(401).json({ error: true, data: "No result found" });
  }
};

//update student list
const updateStudent = (req, res) => {
  const { no } = req.params;
  const { name, age, tel, email } = req.body;

  const existingStudent = data.find((student) => {
    return student.no === Number(no);
  });

  const updatedStudent = data.map((student) => {
    if (student.no === Number(no)) {
      student.no = no;
      student.name = name;
      student.email = email;
      student.age = age;
      student.tel = tel;
    }
    return student;
  });

  if (existingStudent) {
    res.status(200).json({ success: true, data: updatedStudent });
  } else {
    res
      .status(200)
      .json({ error: `The student with ${no} doesn't exist in our records` });
  }
};

//delete student
const deleteStudent = (req, res) => {
  const { no } = req.params;
  console.log(no);

  const deletedList = data.filter((student) => {
    return student.no !== Number(no);
  });
  const checkList = data.find((student) => {
    return student.no === Number(no);
  });

  if (!checkList) {
    res
      .status(404)
      .json({
        error: "Data deletion unsuccessful, no nodes found with such id",
      });
  }

  if (deletedList && checkList) {
    res.status(200).json({
      success: true,
      data: `Successfully deleted student no ${no}`,
      newData: deletedList,
    });
  }
};

//catch all route
const catchAll = (req, res) => {
  res.status(400).json({
    error: true,
    data: "404 Error, the page that you're looking for doesn't exist",
  });
};

module.exports = {
  home,
  catchAll,
  students,
  addStudent,
  singleStudent,
  updateStudent,
  deleteStudent,
};

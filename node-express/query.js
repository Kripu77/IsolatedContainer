//initilaise express

const express = require("express");
const app = express();
const path = require("path");
const { data } = require("./data/road");
const { studentGen } = require("./utils/studentGen");
const { headerCon } = require("./utils/head");

//first get route to homepage

app.use(express.static("../static"));

//get list of all students
app.get("/student", (req, res) => {
  const { search, age, limit } = req.query;


  let finalData = data.filter((singleData) => {
    return singleData.age <= age;
  });

  searchData = data.filter((singleData) => {
    return singleData.name.toLowerCase().startsWith(search)

  })



  if (search) {

    res.status(200).send(`${headerCon(studentGen(searchData))}`);
  }
  if (age && limit) {
    res
      .status(200)
      .send(`${headerCon(studentGen(finalData.slice(0, Number(limit))))}`);
  }

  if (!finalData) {
    res.status(200).send(`${headerCon(studentGen(data))}`);
  }



});

//get details about only single student

app.get("/student/:no", (req, res) => {
  const { no } = req.params;
  const singleStudent = data.filter((singleStudent) => {
    return singleStudent.no == no;
  });

  //DO A RESTIRCTION SEARCH ON THE BASIS OF QUERY STRINGS

  res.status(200).send(`${headerCon(studentGen(singleStudent))}`);
});

//catch all route and use static file
app.use("*", express.static("../static/404.html"));

app.listen(8080, (req, res) => {
  console.log("Server running on port 8080");
});

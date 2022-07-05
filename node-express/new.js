const express = require("express");
const app = express();
const port = 8000;
const { data } = require("./data/road");

//UI templating function

function tempalteHtml(data) {
  const datax = `<div> 
  <h1> The total lists of students available are: ${data.length} </h1>
  <h2> You may click on the individual student button to view more about them: </h2>
  <section> ${data.map((singleStudent) => {
    let { no, name, age, tel, email } = singleStudent;
    const body = `<h1> <a href="student/${no}" >  Students number ${no}'s name is ${name}</h1> </a>
    <p> The student is ${age} years old </p>
    <p> Contact Details of the student is <strong> ${tel} </strong> and ${email} </p>`;

    return body;
  })} </section>
   </div>`;

  return datax;
}

//single student generator

function singleStudent(data) {
  const datax = `<div> 
  <section> ${data.map((singleStudent) => {
    let { no, name, age, tel, email } = singleStudent;
    const body = `<h1>   Students number ${no}'s name is ${name}</h1> 
    <p> The student is ${age} years old </p>
    <p> Contact Details of the student is <strong> ${tel} </strong> and ${email} </p>
    <a href="/student"> Click here to go back to student page </a>
    `;

    return body;
  })} </section>
   </div>`;

  return datax;
}

//route to home

app.get("/", (req, res) => {
  res.send("<h1> Welcome you are in the Home Page </h1>");
});

//route to display the list of all students

app.get("/student", (req, res) => {
  res.send(tempalteHtml(data.slice(0, 10)));
});

// route to handle single student details:

app.get(`/student/:id`, (req, res) => {
  const { params } = req;
  const id = params.id;

  const student = data.find((singleStu) => {
    return singleStu.no == id;
  });
  console.log(student);

  if (!student) {
    res
      .status(404)
      .send(
        "<h1> 404 Error, The page that you're looking for doesn't exist </h1>"
      );
  }
  if (student != undefined) {
    res.send(`<h1> You're  currently looking for student number ${id} details</h1>
  <div> The details are as follows: ${singleStudent([student])}

  </div>`);
  }
});

//route to handle query performed by user
app.get("/api/student/search", (req, res)=>{
  console.log(req.query)

  res.send("<h1> Hello Nibba </h1>")

})

//catch all invalid routes

app.get("*", (req, res) => {
  res
    .status(404)
    .send("<h1> 404 Error, The page that you're looking for doesn't exist");
});

//start server in port 8000

app.listen(port, (err, res) => {
  if (err) throw err;
  console.log(`server running on ${port}`);
});

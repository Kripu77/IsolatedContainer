//function which generates the list of students based on the passed

function studentGen(data) {
    
    let mainBody="";
  if(data.length<1){
    return `<h1> No result found</h1>`
  }

    

 if(data.length>1){
   mainBody = `  <h1> The total number of students are  ${data.length}</h1>`;
 }


  mainBody += data.map((singleStudent) => {
    return `
   
        
        <div>
        <a href="/student/${singleStudent.no}"> Student Number: ${singleStudent.no} </a>
        <p> Student Name: ${singleStudent.name} </p>
        <p> Student Contact: ${singleStudent.tel} </p>
        <p> Student Age: ${singleStudent.age} </p>
        <p> Student Email: ${singleStudent.email} </p>
         </div>

   

   
`;
  });
  mainBody += `<a href="/"> Click here to go back to Homepage </a>`;

  return mainBody;
}

module.exports = {
  studentGen,
};

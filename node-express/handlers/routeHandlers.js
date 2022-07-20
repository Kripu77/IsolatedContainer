const{data} = require("../data/road")

const home = (req, res) => {
  res
    .status(200)
    .send({ success: true, data: "Hello You're currently in the Homepage" });
};

const students = (req, res)=>{

    res.status(200).json({success:true, data:data})


}

const catchAll = (req, res) => {
  res.status(404).send({ error: true, data: "No results found" });
};

const handleLogin = (req, res) => {
  const { fname, lname } = req.body;

  if (fname && lname) {
    res.status(201).send({
      success: true,
      data: [
        {
          firstName: fname,
          lastName: lname,
        },
      ],
    });
  }
  if (!fname || !lname) {
    res.status(500).send({ error: true, data: "No values received" });
  }
};

const postman = (req, res)=>{
  console.log(req.params)

  const {no, name, tel, email, age} = req.body;
  if(no && name && tel && email && age){
    res.status(200).send({
      success:true, data: [...data, {no, name, tel, email, age
      }]
    })
  }
  else{
    res.status(500).send({error:true, data:"Failed"})
  }
}

const updateData = (req, res)=>{

  const {name} = req.body;
  console.log(name )
  console.log(req.params)
  res.send({name})


}


module.exports = { home, catchAll, handleLogin, students, postman, updateData };

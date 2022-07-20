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

module.exports = { home, catchAll, handleLogin, students };

const User = require("../models/user");

module.exports = {
  index,
  update,
  edit,
  show,
  create

};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((user) => res.json(user));
}

function show (req, res){  
  User. findById(req.params.id)
  .then((user)=>{
    res.json(user);
  })
    .catch((err) => {
      res.json(err);
    });
}

function update(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then((user)=>{
    res.json(user);
  })
  .catch((err)=>{
    console.log(err)
  })
}

function edit(req, res){
  User.findById(req.params.id)
  .then((user)=>{
  })
  .catch((err) => {
    res.json(err);
  });
}

function create(req, res) {
    req.body.postedBy = req.user.name;
    req.body.avatar = req.user.avatar;
    User.create(req.body)
    .then(() => res.json())
    .catch((err) => {
        res.json(err);
      });
  }

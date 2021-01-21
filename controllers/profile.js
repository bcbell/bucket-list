const User = require("../models/profile");

module.exports = {
  index,
  update,
  edit,
  show,
  create
};

function index(req, res) {
    console.log("req.user", req.user);
    User.find({}).then((users) => res.json(users));
  }

function show (req, res){  
    User. findById(req.params.id)
    .then((users)=>{
      res.json(user);
    })
      .catch((err) => {
        res.json(err);
      });
  }
  
  function update(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((user)=>{
      res.json(user);
    })
      .catch((err) => {
        res.json(err);
      });
  }
  
  function edit(req, res){
    User.findById(req.params.id)
    .then((users)=>{
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
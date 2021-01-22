const Profile = require("../models/profile");
const User = require('../models/user')

module.exports = {
  index,
  update,
  edit,
  show,
  create
};

function index(req, res) {
    Profile.find({}).console.log(req.user).then((user) => res.json(user));
  }

function show (req, res){  
    Profile. findById(req.params.id)
    .populate('profile')
    .then((profile)=>{
      res.json((profile))
    })
    // .then((profile)=>{
    //   res.json((profile));
    // }).populate('profile')
    //   .catch((err) => {
    //     res.json(err);
    //   });
  }
  
  function update(req, res, next){
    
    Profile.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(() => {res.json(profile)})
  .catch(err => {res.json(err)})
}
  
  function edit(req, res){
    Profile.findById(req.params.id)
    .then(()=>{res.json()
    })
    .catch((err) => {
      res.json(err);
    });
  }
  
  function create(req, res) {
      req.body.postedBy = req.user.name;
      req.body.avatar = req.profile.avatar;
      Profile.create(req.body)
      .then((profile) => 
      User.findById(req.body.avatar)
      .then((user)=>{
        user.profile.push(profile.avatar)
        user.save()
        .then((profile)=>{
          res.json(profile)
    
        })
      })
   
    .catch((err) => {
      res.json(err);
    }));
  }
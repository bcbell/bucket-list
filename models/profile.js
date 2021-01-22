const mongoose = require('mongoose');
const Schema = mongoose.Schema

const profileSchema = new Schema({
   user: { type: Schema.Types.ObjectId, ref: 'User'},
   avatar: String, 
    bio: String, 
    status: {type: String, enum:['Dreaming of a Vacation ', 'Business Trip', 'Weekend Trip', 'Weekend Getaway', 'Honeymoon or Romantic Vacation', 'Family Trip' ]
    },
    dream: String,
    favorite: String,
   
   
  
  }, {
    timestamps: true
  });
  

  module.exports = mongoose.model('Profile', profileSchema);

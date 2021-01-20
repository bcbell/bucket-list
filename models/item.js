const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema ({
    reviewer: String, 
    avatar: String, 
    rating: {type: Number, min: 1, max: 10},
    content: String 
})

const photoSchema = new Schema ({
    photographer: String, 
    avatar: String, 
    photo: String
})

const itemSchema = new Schema ({
    addedBy: [{ type: Schema.Types.ObjectId, ref: "User" }], 
    completed: {type: Boolean, default: false},
    avatar: String,
    dateTime: Date, 
    location: String, 
    tickets: {type: Boolean, default: false},
    reservations: {type: Boolean, default: false},
    reservationName: String, //this could drop down if they clicked yes for reservations
    notes: String,
    reviews: [reviewSchema],
    photos: [photoSchema]
})


module.exports = mongoose.model('Items', itemSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  postedBy: String,
  avatar: String,
  content: String,
});

const messageBoardSchema = new Schema({
  postedBy: String,
  avatar: String,
  title: String,
  replies: [replySchema],
  content: String
});

module.exports = mongoose.model("MessageBoard", messageBoardSchema);

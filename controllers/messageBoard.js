const MessageBoard = require("../models/MessageBoard");

module.exports = {
  index,
  create,
  show,
  reply,
  delete: deletePost,
  deleteReply,
};

function index(req, res) {
  MessageBoard.find({})
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => {
      res.json(err);
    });
}

function create(req, res) {
    // req.body.postedBy = req.formData.user;
  //   req.body.avatar = req.user.avatar;
  MessageBoard.create(req.body)
    .then((message) => res.json(message))
    .catch((err) => {
      res.json(err);
    });
}

function show(req, res) {
  MessageBoard.findById(req.params.id)
    .then((message) => {
      res.json(message);
    })
    .catch((err) => {
      res.json(err);
    });
}

function reply(req, res) {
  MessageBoard.findById(req.params.id).then((message) => {
    // req.body.postedBy = req.user.name;
    // req.body.avatar = req.user.avatar;
    console.log(req.body)
    message.replies.push(req.body);
    message
      .save()
      .then(() => {
        res.json(message);
      })
      .catch((err) => {
        res.json(err);
      });
  });
}

function deletePost(req, res) {
  MessageBoard.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json();
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteReply(req, res) {
  console.log(req.params);
  MessageBoard.findById(req.params.messageId).then((message) => {
    const idx = message.replies.findIndex(
      (reply) => reply._id === req.params.replyId
    );
    message.replies.splice(idx, 1);
    message
      .save()
      .then(() => {
        res.json();
      })
      .catch((err) => {
        res.json(err);
      });
  });
}

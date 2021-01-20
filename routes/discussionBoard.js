const express = require("express");
const router = express.Router();
const discussionCtrl = require("../controllers/discussionBoard");

/*---------- Public Routes ----------*/
router.get("/", discussionCtrl.index);
router.post("/", discussionCtrl.create);
router.get("/:id", discussionCtrl.show);
router.post("/:id", discussionCtrl.reply);
router.delete("/:id", discussionCtrl.delete);
router.delete("/:messageId/:replyId", discussionCtrl.deleteReply);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));



/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;

const express = require("express");
const router = express.Router();
const mBCtrl = require("../controllers/messageBoard");

/*---------- Public Routes ----------*/
router.get("/", mBCtrl.index);
router.post("/", mBCtrl.create);
router.get("/:id", mBCtrl.show);
router.post("/:id", mBCtrl.reply);
router.delete("/:id", mBCtrl.delete);
router.delete("/:messageId/:replyId", mBCtrl.deleteReply);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;

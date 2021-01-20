const router = require("express").Router();
const apiCtrl = require("../controllers/api");


/*---------- Public Routes ----------*/
router.post('/search', apiCtrl.searchPlaces)
router.post('/details', apiCtrl.searchDetails)


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));




function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}


module.exports = router;

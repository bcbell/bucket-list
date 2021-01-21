const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/",  profileCtrl.index);
router.put('/:id/', profileCtrl.update)
router.get('/:id', profileCtrl.edit)
router.get('/:id', profileCtrl.show)
router.post('/',  profileCtrl.create)
/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("api/profile/",  profileCtrl.index);
router.put('api/profile/:id', profileCtrl.update)
router.get('api/profile/:id/edit', profileCtrl.edit)


router.get('api/profile/:id', profileCtrl.show)
router.post('api/profile/',  profileCtrl.create)
/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
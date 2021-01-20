const router = require('express').Router()
const tripsCtrl = require('../controllers/trips')


//protected routes
router.use(require('../config/auth'));

router.get('/', tripsCtrl.index)
router.get('/:id', tripsCtrl.show)
router.post('/', tripsCtrl.create)
router.put('/:id', tripsCtrl.update)
router.delete('/:id', tripsCtrl.delete)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router
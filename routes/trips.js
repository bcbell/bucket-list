const router = require('express').Router()
const tripsCtrl = require('../controllers/trips')

router.get('/', tripsCtrl.index)
router.get('/:id', tripsCtrl.show)
router.post('/', tripsCtrl.create)
router.put('/:id', tripsCtrl.update)
router.delete('/:id', tripsCtrl.delete)

module.exports = router
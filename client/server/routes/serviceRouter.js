const Router = require('express');
const router = new Router()
const serviceController = require('../controllers/serviceController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), serviceController.create)
router.get('/get', serviceController.getAll)
router.post('/:id', checkRole('ADMIN'), serviceController.destroy)
router.get('/one/:title/:id', serviceController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), serviceController.update)
router.post('/editIMG/:id', checkRole('ADMIN'), serviceController.destroyAndUpdateIMG)



module.exports = router
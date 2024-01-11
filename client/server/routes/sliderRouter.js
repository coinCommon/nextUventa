const Router = require('express');
const router = new Router()
const sliderController = require('../controllers/sliderController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), sliderController .create)
router.get('/get', sliderController .getAll)
router.post('/:id', checkRole('ADMIN'), sliderController .destroy)
router.get('/one/:id', sliderController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), sliderController.update)
router.post('/editIMG/:id', checkRole('ADMIN'), sliderController.destroyAndUpdateIMG)


module.exports = router
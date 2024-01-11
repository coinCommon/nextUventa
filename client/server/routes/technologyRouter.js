const Router = require('express');
const router = new Router()
const technologyController = require('../controllers/technologyController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), technologyController .create)
router.get('/get', technologyController .getAll)
router.post('/:id', checkRole('ADMIN'), technologyController .destroy)
router.get('/one/:title/:id', technologyController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), technologyController.update)
router.post('/editIMG/:id', checkRole('ADMIN'), technologyController.destroyAndUpdateIMG)



module.exports = router
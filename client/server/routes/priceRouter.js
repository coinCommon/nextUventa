const Router = require('express');
const router = new Router()
const priceController = require('../controllers/priceController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), priceController.create)
router.get('/get', priceController.getAll)
router.post('/:id', checkRole('ADMIN'), priceController.destroy)

router.get('/one/:id', priceController.getOne)
router.post('/edit/:id', priceController.update)



module.exports = router
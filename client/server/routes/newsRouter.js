const Router = require('express');
const router = new Router()
const newsController = require('../controllers/newsController')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/', checkRole('ADMIN'), newsController.create)
router.get('/get', newsController.getAll)
router.post('/:id', checkRole('ADMIN'), newsController.destroy)
router.get('/one/:title/:id', newsController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), newsController.update)
router.post('/editIMG/:id', checkRole('ADMIN'), newsController.destroyAndUpdateIMG)



module.exports = router
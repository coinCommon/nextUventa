const Router = require('express');
const router = new Router()
const documentsController = require('../controllers/documentsController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), documentsController.create)
router.get('/get', documentsController.getAll)
router.post('/:id', checkRole('ADMIN'), documentsController.destroy)
router.get('/one/:id', documentsController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), documentsController.update)

router.get('/download/:fileName', documentsController.download)



module.exports = router
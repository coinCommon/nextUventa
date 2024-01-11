const Router = require('express');
const router = new Router()
const chapterDocumentsController = require('../controllers/chapterDocumentsController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), chapterDocumentsController.create)
router.get('/get', chapterDocumentsController.getAll)
router.post('/:id', checkRole('ADMIN'), chapterDocumentsController.destroy)
router.get('/one/:id', chapterDocumentsController.getOne)
router.post('/edit/:id', checkRole('ADMIN'), chapterDocumentsController.update)



module.exports = router
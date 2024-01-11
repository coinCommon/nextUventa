const Router = require('express');
const router = new Router()
const taskController = require('../controllers/taskController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), taskController.create)
router.post('/:id', checkRole('ADMIN'), taskController.destroy)

router.get('/get', taskController.getAll)
router.get('/one/:id', taskController.getOne)



module.exports = router
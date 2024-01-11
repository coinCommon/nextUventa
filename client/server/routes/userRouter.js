const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/role', checkRole('ADMIN'), userController.check)

router.post('/create', userController.create)
router.post('/:id', checkRole('ADMIN'), userController.destroy)

router.get('/', userController.getAll)



module.exports = router
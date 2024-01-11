const Router = require('express')
const router = new Router()
const otherController = require("../controllers/otherController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/email', otherController.mainMailer)

router.post('/sitemap', otherController.sitemap)
router.post('/token', checkRole('ADMIN'), otherController.createToken)

router.post('/telegram', otherController.telegram)
router.post('/amo_crm_token', otherController.amoCRMToken)
router.post('/amo_crm_data', otherController.amoCRMData)

module.exports = router
const Router = require('express')
const router = new Router()


const otherRouter = require('./otherRouter')

const serviceRouter = require('./serviceRouter')
const priceRouter = require('./priceRouter')
const chapterDocumentsRouter = require('./chapterDocumentsRouter')
const documentsRouter = require('./documentsRouter')
const technologyRouter = require('./technologyRouter')
const userRouter = require('./userRouter')
const sliderRouter = require('./sliderRouter')
const newsRouter = require('./newsRouter')
const taskRouter = require('./taskRouter')


router.use('/other', otherRouter)

router.use('/service', serviceRouter)
router.use('/price', priceRouter)
router.use('/chapter-documents', chapterDocumentsRouter)
router.use('/documents', documentsRouter)
router.use('/technology', technologyRouter)
router.use('/user', userRouter)
router.use('/slider', sliderRouter)
router.use('/news', newsRouter)
router.use('/task', taskRouter)


module.exports = router
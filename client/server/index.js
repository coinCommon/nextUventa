require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const next = require("next")
const dev = process.env.NODE_ENV !== "production"
const express = require("express")

const PORT = process.env.PORT || 5000
const app = next({dev})
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.static(path.resolve(__dirname, 'static')))
    app.use(fileUpload({}))
    app.use('/api', router)
    app.use(errorHandler)

    // Rendering page per request
    app.get("*", (req, res) => {
        return handle(req, res)
    })

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    })
})

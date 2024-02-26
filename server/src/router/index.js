const express = require('express')
const apiRouter = require('./apiRouter')

const router = express.Router()

router.use('/', apiRouter)

module.exports = router
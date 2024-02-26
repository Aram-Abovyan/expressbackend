const express = require('express')
const locationsRouter = require('../locationsRouter')

const router = express.Router()
router.use('/api', locationsRouter)

module.exports = router
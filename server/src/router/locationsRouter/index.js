const express = require('express')
const {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} = require('./handlers')

const router = express.Router()
router
  .post('/locations', createLocation)
  .get('/locations', getLocations)
  .get('/locations/:id', getLocationById)
  .patch('/locations/:id', updateLocation)
  .delete('/locations/:id', deleteLocation)

module.exports = router
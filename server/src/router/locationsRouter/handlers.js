var qs = require('qs');

const Prisma = require('../../prisma')

async function createLocation(req, res) {
  try {
    const location = await Prisma.client().location.create({data: req.body})
    res.send({id: location.id, message: 'success'})
  }
  catch (error) {
    res.send({error, message: 'error'})
  }
}

async function getLocations(req, res) {
  try {
    const { per = 10, page = 1, category } = req.query

    const query = {
      skip: (Number(page) > 1 ? (Number(page) - 1 ) * Number(per) : 0),
      take: Number(per)
    }

    if (category) {
      query.where = {category}
    }

    const locations = await Prisma.client().location.findMany(query)
    res.send({locations, message: 'success'})
  }
  catch (error) {
    res.send({error, message: 'error'})
  }
}

async function getLocationById(req, res) {
  try {
    const location = await Prisma.client().location.findUnique({
      where: {id: Number(req.params.id)}
    })
    res.send({location, message: 'success'})
  }
  catch (error) {
    res.send({error, message: 'error'})
  }
}

async function updateLocation(req, res) {
  try {
    const location = await Prisma.client().location.update({
      where: {id: Number(req.params.id)},
      data: req.body
    })
    res.send({id: location.id, message: 'success'})
  }
  catch (error) {
    res.send({error, message: 'error'})
  }
}

async function deleteLocation(req, res) {
  try {
    const location = await Prisma.client().location.delete({
      where: {id: Number(req.params.id)},
    })
    res.send({id: location.id, message: 'success'})
  }
  catch (error) {
    res.send({error, message: 'error'})
  }
}

module.exports = {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
}
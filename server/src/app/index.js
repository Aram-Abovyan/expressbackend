const express = require('express')
const bodyParser = require('body-parser')
const router = require('../router')

class App {
  constructor() {
    this.port = 3000
    this.app = express()
  }

  run() {
    this.setMiddlewares()
    this.setRouter()
    this.startServer()
  }

  setMiddlewares() {
    this.app.use(bodyParser.json())
  }

  setRouter() {
    this.app.use(router)
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`)
    })
  }
}

module.exports = App
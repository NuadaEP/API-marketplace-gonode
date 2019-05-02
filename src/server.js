const express = require('express')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middwares()
    this.routes()
  }

  middwares () {}

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express

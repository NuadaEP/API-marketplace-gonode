const express = require('express')

const routes = express.Router()

// Require controllers
const UserController = require('./app/controllers/UserController')

// Uses

// Routes
routes.post('/users', UserController.store)

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

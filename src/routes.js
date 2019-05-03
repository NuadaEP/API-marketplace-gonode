const express = require('express')

const routes = express.Router()

// Middlewares
const AuthMiddlewares = require('./app/middlewares/auth')

// Require controllers
const controllers = require('./app/controllers')

// Uses

// Routes
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', AuthMiddlewares, (req, res) => res.json({ ok: true }))

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

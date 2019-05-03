const express = require('express')

const routes = express.Router()

// Middlewares
const AuthMiddlewares = require('./app/middlewares/auth')

// Require controllers
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// Uses

// Routes
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.get('/teste', AuthMiddlewares, (req, res) => res.json({ ok: true }))

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

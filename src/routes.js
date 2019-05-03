const express = require('express')

const routes = express.Router()

// Middlewares
const AuthMiddlewares = require('./app/middlewares/auth')

// Require controllers
const controllers = require('./app/controllers')

// Routes
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(AuthMiddlewares)

// Ads rotues
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

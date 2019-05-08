const express = require('express')
const validate = require('express-validation')

const routes = express.Router()

// Middlewares
const AuthMiddlewares = require('./app/middlewares/auth')

// Require controllers
const controllers = require('./app/controllers')

// Require validator rules
const validators = require('./app/validators')

// Routes
routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

routes.use(AuthMiddlewares)

// Ads rotues
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

// Purchase routes
routes.post(
  '/purchase',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

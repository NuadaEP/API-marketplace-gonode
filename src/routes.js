const express = require('express')
const validate = require('express-validation')
const handler = require('express-async-handler')

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
  handler(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handler(controllers.SessionController.store)
)

routes.use(AuthMiddlewares)

// Ads rotues
routes.get('/ads', handler(controllers.AdController.index))
routes.get('/ads/:id', handler(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handler(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handler(controllers.AdController.update)
)
routes.delete('/ads/:id', handler(controllers.AdController.destroy))

// Purchase routes
routes.post(
  '/purchase',
  validate(validators.Purchase),
  handler(controllers.PurchaseController.store)
)

routes.get('/', (req, res) => res.send('Everything is working'))

module.exports = routes

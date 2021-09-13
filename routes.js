const homeController = require('./src/controllers/homeController')
const express = require('express')

const routes = express.Router()
routes.get('/', homeController.home)

module.exports = routes
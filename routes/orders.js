const express = require('express')
const orderController = require('../controllers/orderController')
const { authentication } = require('../middleware/authentication')
const router = express.Router()

//añadir autenticacion
router.post('/newOrder',authentication, orderController.newOrder)
router.get('/orderWithProducts',orderController.orderAndProducts)
module.exports=router
const { Order, Product } = require('../models/index')

const OrderController = {
    async insert(req, res) {
        try {
            const order = await Order.create(req.body)
            order.addProduct(req.body.ProductId)
            res.status(201).send({message: 'Order created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getAll(req, res) {
        try {
            const orders = await Order.findAll({
                include:[{model: Product, through: {attributes: ['id']}}]
            })
            res.send(orders)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = OrderController
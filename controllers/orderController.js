const { Order,Orderproduct  } = require('../models/index')

const orderController = {
    async newOrder(req, res) {
        try {
            const newOrder = await Order.create({...req.body,UserId:req.user.id})
            newOrder.addProduct(req.body.ProductId)
            res.status(201).send({ msg: "Pedido Completado", newOrder });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
     async orderAndProducts(req,res){
        try {
            const orderAndProducts = await Order.findAll({
                include: {
                  model: Product,
                  attributes: ['id', 'name', 'price']
                },
                where: {
                  orderId: req.params.orderId
                }
              })
            res.send({msg:'Pedidos en pantalla',orderAndProducts})
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports=orderController
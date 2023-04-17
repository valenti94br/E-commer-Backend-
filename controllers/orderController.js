const { Order, Orderproduct } = require('../models/index'); // Importamos los modelos necesarios

const orderController = {
    async newOrder(req, res) {
        try {
            const newOrder = await Order.create(req.body); // Creamos un nuevo pedido con los datos del cuerpo de la solicitud
            newOrder.addProduct(req.body.ProductId); // Asociamos el producto al pedido usando el método addProduct generado automáticamente por Sequelize
            res.status(201).send({ msg: "Pedido realizado con éxito", newOrder }); // Enviamos una respuesta exitosa con el nuevo pedido creado
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async orderAndProducts(req, res) {
        try {
            const orderAndProducts = await Orderproduct.findAll(req.body); // Obtenemos todos los registros de la tabla Orderproduct que coincidan con los datos del cuerpo de la solicitud
            res.send({ msg: 'Pedido con productos mostrándose', orderAndProducts }); // Enviamos una respuesta exitosa con los registros encontrados
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    }
}

module.exports = orderController; // Exportamos el controlador para su uso en otros archivos

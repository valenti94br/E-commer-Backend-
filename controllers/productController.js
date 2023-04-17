const { Product, Category, Sequelize } = require('../models/index')
const { Op } = Sequelize

const ProductController = {
    // Endpoint para crear un nuevo producto
    async createProduct(req, res) {
        try {
            const newProduct = await Product.create(req.body)
            res.status(201).send({ msg: "Producto creado con éxito", newProduct });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para actualizar un producto existente
    async updateProduct(req, res) {
        try {
            await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.send("Producto actualizado con éxito");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para eliminar un producto existente
    async deleteProduct(req, res) {
        try {
            await Product.destroy({
                where: {
                    ProductId: req.params.id
                }
            });
            res.send({ msg: 'Producto eliminado con éxito' })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener productos con su categoría asociada
    async productWithCategory(req, res) {
        try {
            const productsWithCategory = await Product.findAll({
                include: [{ model: Category, attributes: ['name'] }]
            })
            res.status(200).send({ msg: 'Mostrando productos con su categoría', productsWithCategory })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener todos los productos
    async getAllProducts(req, res) {
        try {
            const getAllProducts = await Product.findAll(req.body)
            res.send({ msg: 'Mostrando todos los productos', getAllProducts })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener un producto por su ID
    async productById(req, res) {
        try {
            const productById = await Product.findOne({
                where: { id: req.params.id }
            })
            res.send({ msg: 'Mostrando el producto por ID', productById })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener un producto por su nombre (busqueda parcial)
    async productByName(req, res) {
        try {
            const productByName = await Product.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`,
                    },
                }
            })
            res.send({ msg: 'Mostrando producto por nombre', productByName })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener un producto por su precio
    async productByPrice(req, res) {
        try {
            const productByPrice = await Product.findOne({
                where: {
                    price: req.params.price
                }
            });
            res.send({ msg: 'Producto encontrado', productByPrice })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // Endpoint para obtener productos ordenados por precio de mayor a menor
    async productsByPriceHightoShort(req, res) {
        try {
            const productsByPriceHightoShort = await Product.findAll({
                order: [['price', 'DESC']]
            });
            res.send({ msg: 'Productos encontrados', productsByPriceHightoShort });
        } catch (error) {
          res.status(500).send(error);
        }
      }
}
module.exports = ProductController
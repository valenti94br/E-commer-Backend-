const { Category, Product, Sequelize } = require('../models/index'); // Importamos los modelos necesarios y Sequelize
const { Op } = Sequelize; // Extraemos el operador de Sequelize para su uso

const categoryController = {
    async createCategory(req, res) {
        try {
            const newCategory = await Category.create(req.body); // Creamos una nueva categoría con los datos del cuerpo de la solicitud
            res.status(201).send({ msg: "Categoría creada con éxito", newCategory }); // Enviamos una respuesta exitosa con la nueva categoría creada
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async updateCategory(req, res) {
        try {
            const categoryUpdated = await Category.update(req.body, {
                where: {
                    id: req.params.id // Actualizamos la categoría con el ID proporcionado en los parámetros de la solicitud
                }
            });
            res.send({ msg: "Categoría actualizada con éxito", categoryUpdated }); // Enviamos una respuesta exitosa con la categoría actualizada
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async deleteCategory(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id // Borramos la categoría con el ID proporcionado en los parámetros de la solicitud
                }
            });
            res.send({ msg: 'Categoría borrada correctamente' }); // Enviamos una respuesta exitosa indicando que la categoría fue borrada correctamente
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async categoryWithProducts(req, res) {
        try {
            const categoryWithProducts = await Category.findAll({
                include: [{ model: Product, attributes: ['name'] }] // Obtenemos todas las categorías con sus productos, incluyendo solo el atributo 'name' del modelo de Producto
            });
            res.send({ msg: 'Mostrando categoría con sus productos', categoryWithProducts }); // Enviamos una respuesta exitosa con las categorías y sus productos
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async getAllCategories(req, res) {
        try {
            const getAllCategories = await Category.findAll(); // Obtenemos todas las categorías
            res.send({ msg: 'Mostrando todas las categorías', getAllCategories }); // Enviamos una respuesta exitosa con todas las categorías
        } catch (error) {
            res.status(500).send(error); // Enviamos una respuesta de error con el error capturado
        }
    },

    async categoryById(req, res) {
        try {
            const catById = await Category.findOne({
                where: {
                    id: req.params.id // Obtenemos una categoría por su ID proporcionado en los parámetros de la solicitud
                }
            });
            res.send({ msg: 'Categoría mostrada correctamente', catById }); // Enviamos una respuesta exitosa con la categoría encontrada
        } catch (error) {
            res.status(500).send(error); // Enviamos
        }
    }
};
module.exports = categoryController;
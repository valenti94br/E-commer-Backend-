const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

// Middleware para autenticación de token
const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // Se obtiene el token del encabezado de la solicitud
        const payload = jwt.verify(token, jwt_secret); // Se verifica y decodifica el token usando la clave secreta
        const user = await User.findByPk(payload.id); // Se busca al usuario en la base de datos usando el ID del payload del token
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { UserId: user.id },
                    { token: token }
                ]
            }
        }); // Se busca el token en la base de datos

        if (!tokenFound) { // Si el token no se encuentra en la base de datos, se devuelve un error de no autorizado
            return res.status(401).send({ message: 'No estás autorizado' });
        }

        req.user = user; // Se agrega el usuario a la solicitud para que esté disponible en los controladores siguientes
        next(); // Se llama a la función next para continuar con el siguiente middleware o controlador
    } catch (error) {
        console.log(error)
        res.status(500).send({ error, message: 'Ha habido un problema con el token' });
    }
}

module.exports = { authentication };

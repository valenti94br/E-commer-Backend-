'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category),
      Product.belongsToMany(models.Order, {
        through: models.Orderproduct
      })
    }

  
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce el nombre",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce el precio",
        },
      },
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce el ID de la categoría",
        },
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Permitir valores nulos si no todas las imágenes tienen URL
      validate: {
        isUrl: {
          msg: "Por favor introduce una URL válida para la imagen",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

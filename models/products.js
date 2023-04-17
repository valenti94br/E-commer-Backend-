'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    Product.belongsTo(models.Category),
    Product.belongsToMany(models.Order,{
      through:models.Orderproduct
    })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce el nombre del producto'
        }
      }
    },
    price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce el precio del producto'
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce el ID del producto'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
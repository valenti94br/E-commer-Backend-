'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // Definición del modelo de la categoría
  class Category extends Model {
    static associate(models) {
      // Asociación de uno a muchos con el modelo de Producto
      Category.hasMany(models.Product);
    }
  }

  // Inicialización del modelo de la categoría
  Category.init({
    name: DataTypes.STRING // Campo de nombre de la categoría de tipo STRING
  }, {
    sequelize,
    modelName: 'Category', // Nombre del modelo en la base de datos
  });

  return Category; // Se retorna el modelo de la categoría
};

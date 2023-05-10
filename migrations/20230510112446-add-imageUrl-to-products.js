'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Agregar columna imageUrl a la tabla products
    await queryInterface.addColumn('products', 'imageUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    // Eliminar columna imageUrl de la tabla products
    await queryInterface.removeColumn('products', 'imageUrl');
  }
};

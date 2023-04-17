'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Introduce product name'
          }
        }
      },
      price: {
        type: Sequelize.NUMERIC(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            message: 'Introduce product price'
          }
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Introduce product category ID'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
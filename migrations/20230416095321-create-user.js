'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
            message: 'Introduce your name'
          }
        }
      },
  
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Introduce your surname'
          }
        }
      },
  
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            message: 'Introduce your email address'
          },
          isEmail: true
        }
      },
      
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: 'Introduce your password'
          }
        }
      },

      role: {
        type: Sequelize.STRING
      },
      confirmed: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users');
  }
};
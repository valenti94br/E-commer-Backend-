'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        price: 70,
        name: 'Breath of the Wild',
        CategoryId: 1,
        imageUrl: 'https://example.com/breath-of-the-wild.jpg',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        price: 65,
        name: 'Pokémon Escarlata',
        CategoryId: 1,
        imageUrl: 'https://example.com/pokemon-escarlata.jpg',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        price: 50,
        name: 'Mario Galaxy',
        CategoryId: 1,
        imageUrl: 'https://example.com/mario-galaxy.jpg',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        price: 30,
        name: 'Hollow Kinght',
        CategoryId: 2,
        imageUrl: 'https://example.com/hollow-knight.jpg',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        price: 15,
        name: 'Boomerang Wars',
        CategoryId: 2,
        imageUrl: 'https://example.com/boomerang-wars.jpg',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

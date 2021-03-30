'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Currencies',
      [
        {
          name: 'Peso Argentino',
          symbol: '$',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Dólar Estadounidense',
          symbol: 'U$D',
          createdAt: new Date,
          updatedAt: new Date
        },
      ]
      , {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

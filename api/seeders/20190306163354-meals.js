'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Meals',
      [
        {
          name: 'Rice and Beans',
          price: 600,
          desc: 'Sweet Food',
          catererId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rice and Turkey',
          price: 800,
          desc: 'Sweet Food',
          catererId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eba and Oha Soup',
          price: 400,
          desc: 'Traditional meal',
          catererId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'MoiMoi and Custard',
          price: 300,
          desc: 'Bean cakes and some custard',
          catererId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Meals', null, {});
  }
};

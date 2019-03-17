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
      'OrderItems',
      [
        // One Order
        {
          orderId: 2,
          mealId: 1,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 2,
          mealId: 2,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 2,
          mealId: 3,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        // Another order
        {
          orderId: 3,
          mealId: 1,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 3,
          mealId: 2,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 3,
          mealId: 4,
          quantity: 4,
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
    return queryInterface.bulkDelete('OrderItems', null, {});
  }
};

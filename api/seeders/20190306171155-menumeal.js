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
      'MenuMeals',
      [
        // One Menu
        {
          mealId: 1,
          menuId: 2,
          category: 'breakfast',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mealId: 2,
          menuId: 2,
          category: 'breakfast',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mealId: 3,
          menuId: 2,
          category: 'lunch',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        // Another menu
        {
          mealId: 2,
          menuId: 3,
          category: 'dinner',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mealId: 4,
          menuId: 3,
          category: 'lunch',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mealId: 3,
          menuId: 3,
          category: 'dinner',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
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
    return queryInterface.bulkDelete('MenuMeals', null, {});
  }
};

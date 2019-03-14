'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MenuMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        }
      },
      menuId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Menus',
          key: 'id',
          as: 'menuId'
        }
      },
      category: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: 'breakfast',
        values: ['breakfast', 'lunch', 'dinner']
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MenuMeals');
  }
};
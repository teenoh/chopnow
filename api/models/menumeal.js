'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuMeal = sequelize.define(
    'MenuMeal',
    {
      mealId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        }
      },
      menuId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Menus',
          key: 'id',
          as: 'menuId'
        }
      },
      category: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'breakfast',
        values: ['breakfast', 'lunch', 'dinner']
      }
    },
    {}
  );
  MenuMeal.associate = function(models) {
    // associations can be defined here
  };
  return MenuMeal;
};

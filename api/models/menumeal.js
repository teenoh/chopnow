'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuMeal = sequelize.define('MenuMeal', {
    mealId: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER
  }, {});
  MenuMeal.associate = function(models) {
    // associations can be defined here
  };
  return MenuMeal;
};
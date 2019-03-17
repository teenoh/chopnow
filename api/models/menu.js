'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {type: DataTypes.DATEONLY},
    catererId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'catererId'
      }
    }
    
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      as: 'caterer',
      foreignKey: 'catererId',
      onDelete: 'CASCADE'
    })

    Menu.belongsToMany(models.Meal, {
      as: 'meals',
      foreignKey: 'menuId',
      otherKey: 'mealId',
      through: 'MenuMeal'
    })
  };
  return Menu;
};
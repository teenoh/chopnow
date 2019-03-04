'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    date: {type: DataTypes.DATEONLY},
    
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      foreignKey: 'catererId',
      onDelete: 'CASCADE'
    })

    Menu.belongsToMany(models.Meal, {
      as: 'meals',
      foreignKey: 'menuId',
      through: 'MenuModel'
    })
  };
  return Menu;
};
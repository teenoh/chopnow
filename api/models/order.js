'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      as: 'customer',
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })

    Order.belongsToMany(models.Meal, {
      as: 'meals',
      foreignKey: 'orderId',
      otherKey: 'mealId',
      through: 'OrderItem'
    })
  };
  
  return Order;
};
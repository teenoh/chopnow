'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    meals: DataTypes.ARRAY
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
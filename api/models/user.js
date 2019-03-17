'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['customer', 'caterer', 'admin']
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      businessName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mobileNo: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.TEXT
      }
    },
    {}
  );
  User.associate = models => {
    // associations can be defined here
    User.hasMany(models.Meal, {
      foreignKey: 'catererId',
      as: 'meals'
    });
  };
  return User;
};

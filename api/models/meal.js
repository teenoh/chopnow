export default (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    'Meal',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "https://res.cloudinary.com/teenoh/image/upload/v1551722585/food_placeholder.png"
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      catererId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'catererId'
        }
      },
    },
    {}
  );
  Meal.associate = models => {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId',
      onDelete: 'CASCADE'
    })
  };
  return Meal;
};

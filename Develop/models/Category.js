const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

    // define columns
Category.init(
  {
    Clothing: {
      type: DataTypes.STRING
    },
    Jewelry: {
      type: DataTypes.STRING
    },
    Shoes: {
      type: DataTypes.STRING
    },
    Books: {  
      type: DataTypes.STRING
    },
    Electronics: {
      type: DataTypes.STRING
    },
    Sports: {
      type: DataTypes.STRING
    }
  },
  {
    //Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

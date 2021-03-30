'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Property.init({
    address: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    meters: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    currency_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    main_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
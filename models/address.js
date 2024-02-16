'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
      })

    }
  }
  Address.init({
    fullAddress: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Id of User table - foriegn key"
    },
  },
    {
      sequelize,
      modelName: 'Address',
      tableName: "addresses"
    });
  return Address;
};
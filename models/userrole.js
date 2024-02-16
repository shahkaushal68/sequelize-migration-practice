'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsTo(models.Role, {
        foreignKey: "roleId",
      })

    }
  }
  UserRole.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      comment: "The id of User table"
    },
    roleId: {
      type: DataTypes.INTEGER,
      comment: "The id of Role table"
    },
  }, {
    sequelize,
    modelName: 'UserRole',
    tableName: "userroles"
  });
  return UserRole;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Address, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"

      });

      // this.belongsToMany(models.Role, {
      //   through: 'UserRole', //Write Model name here
      //   foreignKey: "userId",
      //   uniqueKey: 'my_custom_unique'
      // });

      this.hasMany(models.UserRole, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
      allowNull: false,
      comment:
        'type of status: ("Male", "Female", "Other")',
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
    paranoid: true,
    deletedAt: 'destroyTime'
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Review)
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce tu nombre'
        }
      }
    },

    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce your surname'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          message: 'Introduce tu correo electrónico'
        },
        isEmail: true
      }
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Introduce tu contraseña'
        }
      }
    },

    role: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN  
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
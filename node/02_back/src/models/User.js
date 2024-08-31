const { DataTypes } = require('sequelize')
const conexion = require('../config/database');

const User = conexion.define('User', {
  username: {
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
  }
}, {
  tableName: 'users',
  timestamps: false,
  paranoid: false
});

module.exports = User;
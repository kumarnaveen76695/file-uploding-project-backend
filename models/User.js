//models/file.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('Ops User', 'Client User'), allowNull: false },
    email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = User;

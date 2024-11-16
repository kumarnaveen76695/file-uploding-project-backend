//models/file.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const File = sequelize.define('File', {
    file_name: { type: DataTypes.STRING, allowNull: false },
    file_type: { type: DataTypes.STRING, allowNull: false },
    encrypted_url: { type: DataTypes.STRING, allowNull: false },
    uploaded_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

File.belongsTo(User, { foreignKey: 'uploaded_by' });

module.exports = File;

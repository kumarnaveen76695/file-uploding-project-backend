//config/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fileSharing', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(() => console.log('MySQL Connected'))
    .catch((err) => console.error('Error connecting to MySQL:', err));

module.exports = sequelize;

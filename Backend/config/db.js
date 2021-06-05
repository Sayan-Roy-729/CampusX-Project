const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('campusx', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
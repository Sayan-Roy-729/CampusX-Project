const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('campusx', 'admin', 'adminPassword123', {
    dialect: 'mysql',
    host: 'campusx2.c7thgfnu6qp6.us-east-2.rds.amazonaws.com',
});

module.exports = sequelize;
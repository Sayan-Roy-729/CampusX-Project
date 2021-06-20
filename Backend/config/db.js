const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('campusx', 'sayan', 'thisispassword$123', {
//     dialect: 'mysql',
//     host: 'localhost',
// });
const sequelize = new Sequelize('campusx', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
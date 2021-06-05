const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    solution: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Task;
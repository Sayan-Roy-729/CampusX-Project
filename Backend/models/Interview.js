const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Interview = sequelize.define('interviewQuestion', {
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
    answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Interview;
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Quizzes = sequelize.define('quiz', {
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
    option1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    option2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    option3: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    option4: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    right: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Quizzes;
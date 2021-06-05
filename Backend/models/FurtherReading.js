const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const FurtherReading = sequelize.define('furtherReading', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    url: {
        type: Sequelize.STRING,
    },
});

module.exports = FurtherReading;
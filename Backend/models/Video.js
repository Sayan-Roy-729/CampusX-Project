const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Video = sequelize.define('video', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Video;
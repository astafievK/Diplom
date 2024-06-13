const { DataTypes } = require('sequelize');

const sequelize = require('../database');

const Image = sequelize.define('image', {
    idImage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Image;
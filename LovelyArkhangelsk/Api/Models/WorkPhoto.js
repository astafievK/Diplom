const { DataTypes } = require('sequelize');

const sequelize = require('../database');

const Image = sequelize.define('work_photo', {
    idWorkPhoto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    idImage: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: 'image',
            key: 'id'
        }
    },
    idEmployee: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: 'employee',
            key: 'id'
        }
    }
})

module.exports = Image;
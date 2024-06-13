const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const EmployeeHasService = require('./EmployeeHasService')
const Employee = require('./Employee')

const Service = sequelize.define('service', {
    idService: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idImage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'image',
            key: 'idImage'
        }
    },
});



module.exports = Service;
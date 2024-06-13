const { DataTypes } = require('sequelize');

const sequelize = require('../database');

const ServiceHistory = sequelize.define('service_history', {
    idServiceHistory: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    status: {
        type: DataTypes.ENUM('Завершено', 'В ожидании', 'Отменено'),
        allowNull: false
    },
    day: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    month: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hours: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    minutes: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    idEmployeeHasService: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employee_has_service',
            key: 'id'
        }
    },
});

module.exports = ServiceHistory;
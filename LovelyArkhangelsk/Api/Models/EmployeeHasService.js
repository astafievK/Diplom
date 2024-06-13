const {  DataTypes } = require('sequelize');
const sequelize = require('../database');

const EmployeeHasService = sequelize.define('employee_has_service', {
    idEmployeeHasService: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idEmployee: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employee',
            key: 'id'
        }
    },
    idService: {
        type: DataTypes.INTEGER,
        references: {
            model: 'service',
            key: 'id'
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});


module.exports = EmployeeHasService;
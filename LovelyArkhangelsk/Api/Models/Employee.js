const sequelize = require("../database");
const {DataTypes} = require("sequelize");

const Image = require('./Image')
const Service = require('./Service')
const EmployeeHasService = require("./EmployeeHasService");

const Employee = sequelize.define('employee', {
    idEmployee: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idImage: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: 'image',
            key: 'id'
        }
    }
});

Employee.belongsTo(Image, { foreignKey: 'idImage' });
Image.hasMany(Employee, { foreignKey: 'idImage' });

module.exports = Employee
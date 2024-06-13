const { DataTypes } = require('sequelize')

const sequelize = require('../database');

const Employee = require("./Employee");
const Role = require("./Role");

const User = sequelize.define('user', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(11),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patronymic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idRole: {
        type: DataTypes.INTEGER,
        references: {
            model: 'role',
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
});

User.belongsTo(Role, { foreignKey: 'idRole' });
Role.hasMany(User, { foreignKey: 'idRole' });

User.belongsTo(Employee, { foreignKey: 'idEmployee' });
Employee.hasOne(User, { foreignKey: 'idEmployee' });

module.exports = User
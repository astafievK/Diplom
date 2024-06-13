const sequelize = require("../database");
const {DataTypes} = require("sequelize");

const Role = sequelize.define('role', {
    idRole: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
});

module.exports = Role
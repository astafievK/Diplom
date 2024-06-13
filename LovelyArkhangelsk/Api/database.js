const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('lovely_arkhangelsk', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

module.exports = sequelize;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patrimonio = sequelize.define('Patrimonio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    espacoId: {
        type:  DataTypes.INTEGER,
        allowNull: false,
    }
}, {tableName:'Patrimônios', timestamps: true}

);

module.exports = Patrimonio;
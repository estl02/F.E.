const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Espaco = sequelize.define('Espaco', {
    espacoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estadoFisico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recursos: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {tableName: 'Espaços', timestamps: true}

);

module.exports = Espaco;

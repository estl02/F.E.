const Espaco = require('./Espaco');
const Patrimonio = require('./Patrimonio');

Espaco.hasMany(Patrimonio, {
    foreignKey: 'espacoId',
});

Patrimonio.belongsTo(Espaco, {
    foreignKey: 'espacoId',
});

module.exports = { Espaco, Patrimonio };



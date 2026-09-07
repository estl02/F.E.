const express = require('express');
const { engine } = require('express-handlebars');
//adicionar um /espacos no final no endereco github.dev

const espacoRoutes = require('./routes/espacoRoutes');
const patrimonioRoutes = require('./routes/patrimonioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const sequelize = require('./config/database');

require('./models/associations');

const app = express();

const PORT = 3000;

app.engine(
    'handlebars',
    engine({
        defaultLayout: 'main',
        helpers: {
            eq: (a, b) => a == b
        }
    })
);

app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/espacos', espacoRoutes);
app.use('/patrimonios', patrimonioRoutes);
app.use('/usuarios', usuarioRoutes);

async function iniciarServidor() {
    try {
        await sequelize.sync( {force: true} );

        console.log('Banco de dados conectado.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao conectar ao banco:', error);
    }
}

iniciarServidor();

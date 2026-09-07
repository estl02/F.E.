const Espaco = require('../models/Espaco');

const espacoController = {
    
   async criar(req, res) {
        try {
            const {
                nome, bloco, estadoFisico, recursos
            } = req.body;

            await Espaco.create({
                nome, bloco, estadoFisico, recursos
            });

            res.redirect('/espacos');
        } catch (error) {
            console.error(error);
            res.status(500).send('erro ao cadastrar espaço');
        }
    },

    async listar(req, res) {
        try {
            const espacos = await Espaco.findAll();
            const espacosDados = espacos.map(espaco => espaco.toJSON());

            res.render('espacos/index', {
                espacos: espacosDados
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao listar espaços');
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { 
                nome, bloco, estadoFisico, recursos 
            } = req.body;
            const espaco = await Espaco.findByPk(id);

            if (!espaco) {
                return res.status(404).send('espaço não encontrado');
            }

            await espaco.update({
                nome, bloco, estadoFisico, recursos
            });

            res.redirect('/espacos');

        } catch (error) {
            console.error(error);
            res.status(500).send('erro ao atualizar espaço');
        }
    },

    async excluir(req, res){
        try {
            const { id } = req.params;
            const espaco = await Espaco.findByPk(id);

            if (!espaco) {
                return res.status(404).send('Espaço não encontrado');
            }

            await espaco.destroy();

            res.redirect('/espacos');
        } catch (error) {
            console.error(error);
            res.status(500).send('erro ao excluir espaço');
        }
    }
};

module.exports = espacoController;
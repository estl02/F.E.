const Patrimonio = require('../models/Patrimonio');
const Espaco = require('../models/Espaco')

const patrimonioController = {

     async criar(req, res) {
        try {
            const {
                nome, codigo, espacoId
            } = req.body

            const espaco = await Espaco.findByPk(espacoId);

            if(!espaco){
                return res.status(400).send('espaço não encontrado');
            }

            await Patrimonio.create({
                nome, codigo, espacoId
            });

            res.redirect('/patrimonios');
        } catch(error) {
            console.error(error);
            res.status(500).send('erro ao cadastrar patrimonio');
        }
    },
    
    async listar(req, res) {
        try {
            const patrimonios = await Patrimonio.findAll({
                include: {model: Espaco}
            });
            
            const espacos = await Espaco.findAll();

            res.render('patrimonios/index', {
                patrimonios: patrimonios.map(p => p.toJSON()),
                espacos: espacos.map(e => e.toJSON())
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao listar patrimonios');
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const {
                nome, codigo, espacoId
            } = req.body;
            const patrimonio = await Patrimonio.findByPk(id);

            if (!patrimonio) {
                return res.status(404).send('patrimonio ñ encontrado');
            }

            const espaco = await Espaco.findByPk(espacoId);
            if(!espaco){return res.status(404).send('patrimonio n encontrado')};

            await patrimonio.update({
                nome, codigo, espacoId
            });

            res.redirect('/patrimonios');

        }catch(error){
            console.error(error);
            res.status(500).send('erro ao atualizar patrimônio');
        }
    },

    async excluir(req, res) {
        try{
            const { id } = req.params;
            const patrimonio = await Patrimonio.findByPk(id);

            if(!patrimonio) {
                return res.status(404).send('patrimonio ñ encotrado');
            }

            await patrimonio.destroy();

            res.redirect('/patrimonios');
        }catch(error) {
            console.error(error);
            res.status(500).send('erro ao exclior patrimonio');
        }
    }
};

module.exports = patrimonioController;
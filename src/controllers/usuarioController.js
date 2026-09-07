const Usuario = require('../models/Usuario');

const usuarioController = {

    async criar(req, res) {
        try {
            const {
                nome, emailInstitucional, matricula
            } = req.body;

            await Usuario.create({
                nome, emailInstitucional, matricula
            });

            res.redirect('/usuarios');
        }catch(error) {
            console.error(error);
            res.status(500).send('erro ao cadastrar usuario');
        }
    },

    async listar(req, res){
        try {
            const usuarios = await Usuario.findAll();
            const usuariosDados = usuarios.map(usuario => usuario.toJSON());

            res.render('usuarios/index', {
                usuarios: usuariosDados
            });
        } catch(error) {
            console.error(error);
            res.status(500).send('erro ao listar usuarios');
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const {
                nome, emailInstitucional, matricula
            } = req.body;
            const usuario = await Usuario.findByPk(id);

            if(!usuario) {
                return res.status(404).send('usuario não encontrado');
            }

            await usuario.updade({
                nome, emailInstitucional, matricula
            });

            res.redirect('/usuarios');
        } catch(error) {
            console.error(error);
            res.status(500).send('error ao atualizar usuario');
        }
    },

    async excluir(req, res){
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);

            if(!usuario) {
                return res.status(404).send('usuario não encontrado');
            }

            await usuario.destroy();

            res.redirect('/usuarios');

        } catch(error) {
            console.error(error);
            res.status(500).send('error ao excluir usuario');
        }
    }

};

module.exports = usuarioController;
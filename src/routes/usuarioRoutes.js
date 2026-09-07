const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listar);
router.post('/', usuarioController.criar);
router.post('/:id/editar', usuarioController.atualizar);
router.post('/:id/excluir', usuarioController.excluir);

module.exports = router;
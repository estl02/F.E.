const express = require('express');
const router = express.Router();

const patrimonioController = require('../controllers/patrimonioController');

router.get('/', patrimonioController.listar);
router.post('/', patrimonioController.criar);
router.post('/:id/editar', patrimonioController.atualizar);
router.post('/:id/excluir', patrimonioController.excluir);

module.exports = router;

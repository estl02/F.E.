const express = require('express');
const router = express.Router();

const espacoController = require('../controllers/espacoController');

router.get('/', espacoController.listar);
router.post('/', espacoController.criar);
router.post('/:id/editar', espacoController.atualizar);
router.post('/:id/excluir', espacoController.excluir);

module.exports = router;

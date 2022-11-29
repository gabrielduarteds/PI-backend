var express = require('express');
var router = express.Router();
const instrutoresController = require('../controllers/instrutores');
const middleware = require('../middlewares/validacao');


router.get('/', instrutoresController.listar);

router.get('/:id', middleware.validaIdInstrutor, instrutoresController.exibir);

router.post('/:id', middleware.validaToken, instrutoresController.cadastrar);

router.put('/:id', middleware.validaToken, instrutoresController.atualizar);

router.delete('/:id', middleware.validaToken, instrutoresController.excluir)

module.exports = router;
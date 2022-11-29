var express = require('express');
var router = express.Router();
const alunosController = require('../controllers/alunos');
const middleware = require('../middlewares/validacao');

router.get('/', alunosController.listar);

router.get('/:id', middleware.validaIdAluno, alunosController.exibir);

router.post('/:id', middleware.validaToken, alunosController.cadastrar)

router.put('/:id', middleware.validaToken, alunosController.atualizar)

router.delete('/:id', middleware.validaToken, alunosController.excluir)

module.exports = router;
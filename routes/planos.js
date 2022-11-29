var express = require('express');
var router = express.Router();
const planosController = require('../controllers/planos');
const middleware = require('../middlewares/validacao');


router.get('/', planosController.listar);

router.get('/:id', middleware.validaIdPlano, planosController.exibir);

router.put('/:id', middleware.validaToken, planosController.atualizar)

module.exports = router;
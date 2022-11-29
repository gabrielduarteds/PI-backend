var express = require('express');
var router = express.Router();
const boletosController = require('../controllers/boletos');
const middleware = require('../middlewares/validacao');

router.get('/', boletosController.listar);

router.get('/:id',  middleware.validaIdBoleto, boletosController.exibir);

module.exports = router;
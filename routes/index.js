var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');

router.get('/', indexController.rodando);

module.exports = router
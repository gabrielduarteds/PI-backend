const { ObjectId } = require('bson');
const { PromiseProvider } = require('mongoose');
const Boleto = require('../models/boletos');

async function listar(req, res) {
    await Boleto.find({}).then(boletos => {return res.json(boletos)})
    .catch(error => {return res.status(500).json(error)});
};

async function exibir(req, res) {
    await Boleto.findOne({_id: ObjectId(req.params.is)}).then(boleto => {if(boleto) return res.json(boleto);
    else return res.status(404).json('Boleto não encontrado')})
    .catch(error => {return res.status(500).json(error)});
};

module.exports = {listar, exibir}
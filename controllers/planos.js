const { ObjectId } = require('bson');
const { PromiseProvider } = require('mongoose');
const Plano = require('../models/planos');

async function listar(req, res) {
    await Plano.find({}).then(planos => {return res.json(planos)})
    .catch(error => {return res.status(500).json(error)});
};

async function exibir(req, res) {
    await Plano.findOne({_id: ObjectId(req.params.is)}).then(plano => {if(plano) return res.json(plano);
    else return res.status(404).json('Plano não encontrado')})
    .catch(error => {return res.status(500).json(error)});
};

async function atualizar(req, res) {
    await Plano.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body)
    .then(plano => {
        if(plano) return res.status(204).end();
        else return res.status(404).json('Plano não encontrado')
    })
    .catch(error => {return res.status(500).json(error)})
};

module.exports = {listar, exibir, atualizar}
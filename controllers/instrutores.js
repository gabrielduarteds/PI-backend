const { ObjectId } = require('bson');
const { PromiseProvider } = require('mongoose');
const Instrutor = require('../models/instrutores');

async function listar(req, res) {
    await Instrutor.find({}).then(instrutores => {return res.json(instrutores)})
    .catch(error => {return res.status(500).json(error)});
};

async function exibir(req, res) {
    await Instrutor.findOne({_id: ObjectId(req.params.is)}).then(instrutor => {if(instrutor) return res.json(instrutor);
    else return res.status(404).json('Instrutor não encontrado')})
    .catch(error => {return res.status(500).json(error)});
};

async function cadastrar(req, res) {
    const Instrutor = new Instrutor(req.body);
    await instrutor.save().then(doc => {return res.status(201).json(doc)})
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {msgErro(properties.path) = properties.message});
        return res.status(422).json(msgErro);
    });
    };

async function atualizar(req, res) {
    await Instrutor.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body)
    .then(instrutor => {
        if(instrutor) return res.status(204).end();
        else return res.status(404).json('Instrutor não encontrado')
    })
    .catch(error => {return res.status(500).json(error)})
};

async function excluir(req, res) {
    await Instrutor.findOneAndDelete({_id: ObjectId(req.params.id)})
    .then(instrutor => {
        if(instrutor) return res.status(204).end();
        else return res.status(404).json('Instrutor não encontrado')
    })
    .catch(error => {return res.status(500).json(error)})
}

module.exports = {listar, exibir, cadastrar, atualizar, excluir}
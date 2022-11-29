const { ObjectId } = require('bson');
const { PromiseProvider } = require('mongoose');
const Aluno= require('../models/alunos');

async function listar(req, res) {
    await Aluno.find({}).then(alunos => {return res.json(alunos)})
    .catch(error => {return res.status(500).json(error)});
};

async function exibir(req, res) {
    await Aluno.findOne({_id: ObjectId(req.params.is)}).then(aluno => {if(aluno) return res.json(aluno);
    else return res.status(404).json('Aluno não encontrado')})
    .catch(error => {return res.status(500).json(error)});
};

async function cadastrar(req, res) {
    const aluno = new Aluno(req.body);
    await aluno.save().then(doc => {return res.status(201).json(doc)})
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {msgErro(properties.path) = properties.message});
        return res.status(422).json(msgErro);
    });
    };

async function atualizar(req, res) {
    await Aluno.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body)
    .then(aluno => {
        if(aluno) return res.status(204).end();
        else return res.status(404).json('Aluno não encontrado')
    })
    .catch(error => {return res.status(500).json(error)})
};

async function excluir(req, res) {
    await Aluno.findOneAndDelete({_id: ObjectId(req.params.id)})
    .then(aluno => {
        if(aluno) return res.status(204).end();
        else return res.status(404).json('Aluno não encontrado')
    })
    .catch(error => {return res.status(500).json(error)})
}

module.exports = {listar, exibir, cadastrar, atualizar, excluir}
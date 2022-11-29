const { validate: isUuid } = require('uuid');
const jwt = require('jsonwebtoken');
const Aluno = require('../models/alunos');
const Plano = require('../models/planos');
const Boleto = require('../models/boletos');
const Instrutor = require('../models/instrutores');

async function validaIdAluno(req, res, next) {
	const index = req.params.id;
	if (!isUuid(index)) {
		return res.status(400).json({ Erro: 'ID de aluno inválido!' });
	}

	try {
		const itemAluno = await Aluno.find({ _id: req.params.id });
		res.aluno = itemAluno;
		if (!itemAluno) {
			return res.status(404).json({ Erro: 'ID de aluno não encontrado!' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ Erro: 'Erro interno na aplicação!' });
	}

	next();
}

async function validaIdInstrutor(req, res, next) {
	const index = req.params.id;
	if (!isUuid(index)) {
		return res.status(400).json({ Erro: 'ID de instrutor inválido!' });
	}

	try {
		const itemInstrutor= await Instrutor.find({ _id: req.params.id });
		res.instrutor = itemInstrutor;
		if (!itemInstrutor) {
			return res.status(404).json({ Erro: 'ID de instrutor não encontrado!' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ Erro: 'Erro interno na aplicação!' });
	}

	next();
}

async function validaIdPlano(req, res, next) {
	const index = req.params.id;
	if (!isUuid(index)) {
		return res.status(400).json({ Erro: 'ID de plano inválido!' });
	}

	try {
		const itemPlano = await Plano.find({ _id: req.params.id });
		res.plano = itemPlano;
		if (!itemPlano) {
			return res.status(404).json({ Erro: 'ID de plano não encontrado!' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ Erro: 'Erro interno na aplicação!' });
	}

	next();
}

async function validaIdBoleto(req, res, next) {
	const index = req.params.id;
	if (!isUuid(index)) {
		return res.status(400).json({ Erro: 'ID de boleto inválido!' });
	}

	try {
		const itemBoleto = await Boleto.find({ _id: req.params.id });
		res.boleto = itemBoleto;
		if (!itemBoleto) {
			return res.status(404).json({ Erro: 'ID de boleto não encontrado!' });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ Erro: 'Erro interno na aplicação!' });
	}

	next();
}

function validaToken(req, res, next) {
	const token = req.cookies.tokenUsuario;
	if (!token) {
		return res.status(401).json({ Erro: 'Token não informado. Acesso negado!' });
	}

	try {
		const segredo = process.env.SEGREDO;
		jwt.verify(token, segredo, (error, documento) => {
			if (error) {
				return res.status(401).json({ Erro: 'Token inválido. Acesso negado!' });
			}
			req.body.id = documento._id;
		});

		next();
	} catch (error) {
		return res.status(401).json({ Erro: 'Token inválido. Acesso negado!' });
	}
}

module.exports = {
	validaIdAluno,
	validaIdInstrutor,
	validaIdPlano,
    validaIdBoleto,
	validaToken
};
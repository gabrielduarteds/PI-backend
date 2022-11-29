const mongoose = require('mongoose')

const boletoSchema = new mongoose.Schema({
    matricula: {
        type: mongoose.Schema.Types.String,
        ref: 'Aluno',
        required: true, 
        immutable: true
    },
    planoContratado: {
        type: mongoose.Schema.Types.String,
        ref: 'Aluno',
        required: true
    },
    vencimento: {
        type: Date,
        required: [true, 'Data de vencimento é obrigatório']
    },
    valor: {
        type: String,
        required: [true, 'Valor é obrigatório']
    },
    situacao: {
        type: String,
        required: [true, 'É obrigatório saber se a parcela está em atraso ou foi paga']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Boleto', boletoSchema);
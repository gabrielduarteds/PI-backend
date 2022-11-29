const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    matricula: {
        type: Number,
        required: [true, 'Número de matrícula é obrigatório'],
        trim: true,
        unique: true
    },
    senha: {
        type: String,
        required: [true, 'A senha é obrigatória!'],
        trim: true,
        select: false
    },
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
        trim: true,
        uppercase: true, 
        minLength: [3, 'Nome deve ter pelo menos 3 caracteres']
    },
    peso: {
        type: Number,
        required: [true, 'Peso em quilos(kg), é obrigatório']
    },
    altura: {
        type: Number,
        required: [true, 'Altura em centímetros(cm), é obrigatório']
    },
    idade: {
        type: Date,
        required: [true, 'Idade é obrigatório']
    },
    sexo: {
        type: String,
        required: [true, 'Sexo é obrigatório'],
        lowercase: true,
        enum: {
            values: ['masculino', 'feminino'],
            message: 'O sexo deve ser: feminino ou masculino!'
        }
    },
    planoContratado: {
        type: mongoose.Schema.Types.String,
        ref: 'Plano'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Aluno', alunoSchema);
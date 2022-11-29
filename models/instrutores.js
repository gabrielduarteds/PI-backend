const mongoose = require('mongoose')

const instrutorSchema = new mongoose.Schema({
    matriculaInstrutor: {
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
    modalidade: {
        type: String,
        required: [true, 'Modalidade é obrigatório'],
        trim: true,
        lowercase: true,
        enum: {
            values: ['pilates', 'musculacao', 'fit dance'],
            message: 'A modalidade deve ser pilates, musculacao, fit dance!'
        }
    },
    turno: {
        type: String,
        required: [true, 'Turno é obrigatório'],
        trim: true,
        lowercase: true,
        enum: {
            values: ['matutino', 'vespertino', 'noturno', 'diurno'],
            message: 'Você deve escolher entre os turnos matutino, vespertino, noturno ou diurno!'
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Instrutor', instrutorSchema);
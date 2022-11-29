const mongoose = require('mongoose')

const planoSchema = new mongoose.Schema({
    basico: [{
        modalidades: {
            type: String,
            enum: {
                values: ['musculacao', 'aerobico']
            }
        },
        preco: {
            type: Number,
            enum: {
                values: ['89,90'],
            }
        }
    }],
    essential: [{
        modalidades: {
            type: String,
            enum: {
                values: ['musculacao', 'aerobico', 'pilates', 'fit dance'],
                message: 'Nesse plano o cliente deve escolher entre pilates ou fit dance'
            }
        },
        preco: {
            type: Number,
            enum: {
                values: ['99,90'],
            }
        }
    }],
    premium: [{
        modalidades: {
            type: String,
            enum: {
                values: ['musculacao', 'aerobico', 'pilates', 'fit dance', 'massagem'],
                message: 'Nesse plano o cliente tem direito a uma massagem por semana além de todas as modalidades disponíveis'
            }
        },
        preco: {
            type: Number,
            enum: {
                values: ['119,90'],
            }
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Plano', planoSchema);
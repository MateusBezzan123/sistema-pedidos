const smc = require('simple-mongoose-creator')
smc.smc('funcionarios', {
    nome: {
        type: Number,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = smc;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const funcionario = new schema({

    matricula: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    }
});
module.exports = mongoose.model('funcionarios', funcionario);


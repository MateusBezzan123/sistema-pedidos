var mongoose = require('mongoose');
const schema = mongoose.Schema;

const cliente = new schema({
    nome: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('clientes', cliente);

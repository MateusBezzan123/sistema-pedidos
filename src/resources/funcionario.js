require('../models/funcionario')

const mongoose = require('mongoose')
const modelo = mongoose.model('funcionarios')

const cript = require('bcrypt')
const salt = 10


// metodo Crud 
class Funcionario {
    static async criar(dados) {
        let { senha } = dados;
        let hash = await cript.hash(senha, salt)
        senha = hash
        dados.senha = senha
        return await new modelo(dados).save()
    }

    static async autenticar(dados) {
        const { matricula } = dados
        const funcionario = await modelo.findOne({ matricula })
        return funcionario
    }

    static async buscarTodos() {
        return await modelo.find({})
    }

    static async buscarPorID(id) {
        return await modelo.findOne({ _id: id })
    }

    static async atualizar(id, dados) {
        return await modelo.findOneAndUpdate(id, { $set: dados })
    }

    static async deletar(id) {
        return await modelo.findOneAndRemove(id)
    }
}

module.exports = Funcionario
const express = require('express')
const bp = require('body-parser')

const app = express()

// configurando o parser

app.use(bp.json({ limit: '10mb' }))
app.use(bp.urlencoded({ extended: false }))


// configurando Front
app.set('view engine', 'ejs')
app.set('views', 'views')


//definindo arquivos estaticos
app.use(express.static('public'))


//chamando rotas
app.use('/', (req, res)=>{
    return res.render('login')
}) 

module.exports = app;
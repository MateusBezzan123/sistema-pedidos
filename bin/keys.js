'use strict'

module.exports = {
    server: { port: process.env.port || 3000 },
    database: {
        connection: process.env.connection || 'mongodb+srv://mateusbezzan:17121996@cluster0.hukxrlv.mongodb.net/test'
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Televisao = new Schema({
    nome: {
        type: String,
        required: true
    },

    foto: {
        type: String,
    },

    marca: {
        type: String,
    },

    modelo: {
        type: String
    },

    tipo: {
        type: String
    },

    cor: {
        type: String,
    },

    altura: {
        type: String,
    },

    endereco: {
        type: Object,
    },
    
});

module.exports = mongoose.model('Televisao', Televisao);
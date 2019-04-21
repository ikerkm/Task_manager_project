const mongoose = require('mongoose');
const {
    pick
} = require('lodash');
const jwt = require('jsonwebtoken');
////////////AQUI MANEJO DE TOKENS JWT
const BoardSchema = new mongoose.Schema({
    // _id, 
    author: {
        type: String,
        required: true,

    },
    Boardname: {
        type: String,
        required: true,
        maxlength: 50
    },


});
////////////AQUI MANEJO DE TOKENS JWT


BoardSchema.statics.findByCredentials = ({
    email,
    password
}) => {
    // email, password
    console.log(email, password);

    return Board.findOne({
        email,
        password
    })
}

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
const mongoose = require('mongoose');
const {
    pick
} = require('lodash');
const jwt = require('jsonwebtoken');
////////////AQUI MANEJO DE TOKENS JWT
const UserSchema = new mongoose.Schema({
    // _id, 
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        token: {
            type: String,
            reqiored: true,
        },
        type: {
            type: String,
            reqiored: true,
        },
    }]
});
////////////AQUI MANEJO DE TOKENS JWT
UserSchema.methods.generateAuthToken = function () {

    const user = this;
    const payload = {
        _id: user._id,
        iat: Date.now() / 1000,
        exp: Date.now() / 1000 + 60 * 60,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    user.tokens.push({
        token,
        type: 'auth',
    })
    return user.save().then(() => {
        return token;
    });
}
UserSchema.methods.toJSON = function () {
    const user = this;

    return pick(user, ['_id', 'name', 'email', 'tokens']);
}

UserSchema.statics.findByCredentials = ({
    email,
    password
}) => {
    // email, password
    console.log(email, password);

    return User.findOne({
        email,
        password
    })
}

const User = mongoose.model('user', UserSchema);

module.exports = User;
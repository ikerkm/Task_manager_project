const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const authorization = (req, res, next) => {
    try {
        const {
            _id
        } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        next();

    } catch (err) {
        res.status(401).send(err.message);
    }

}

module.exports = {
    authorization
};
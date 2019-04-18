const jwt = require('jsonwebtoken');

const payload = {
    _id: 1,
    iat: Date.now() / 1000,
    exp: Date.now() / 1000 + 5,
}


const PASS = 'yatusabe';
const token = jwt.sign(payload, PASS);
console.log(token);


console.log('Decoded: ', jwt.decode(token));

const result = jwt.verify(token, PASS);
console.log('Result: ' + result);
setTimeout(() => {
    const result = jwt.verify(token, PASS);
}, 5000)
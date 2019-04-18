const mongoose = require('mongoose');
const host = 'localhost';
const port = 27017;

const DB = 'DB_tasks_dev_react';



//ojo con las comas abiertas para solicitar datos con $
mongoose.connect(`mongodb://${host}:${port}/${DB}`, {
    useNewUrlParser: true
});

module.exports = mongoose;
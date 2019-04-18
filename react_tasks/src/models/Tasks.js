const mongoose = require('mongoose');
const {
    pick
} = require('lodash');
const TaskSchema = new mongoose.Schema({

    task_name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    task_desc: {
        type: String,
        required: true,


    },

    task_date: {
        type: String,
        required: true,


    },
    task_stimated: {
        type: String,

        required: true,
    },
}, {
    strict: true


})


const Tasks = mongoose.model('Tasks', TaskSchema);
module.exports = Tasks;
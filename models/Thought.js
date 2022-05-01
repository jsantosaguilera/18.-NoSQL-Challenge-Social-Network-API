const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Please enter your thought',
        minLength: 1,
        maxLength: 280,
    },
    // user that created the thought
    username: {
        type: String,
        required: 'Please enter your username',
    }
})
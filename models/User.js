const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    friendIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    userName: {
        type: String,
        unique: true,
        required: 'A username is required',
        trim: true,
    },
    email: {
        type: String,
        required: 'An email is required',
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
    }
});

module.exports = require('User', userSchema);
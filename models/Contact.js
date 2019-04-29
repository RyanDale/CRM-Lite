const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Note = require('./Note');

const ContactSchema  = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: 'string',
    email: 'string',
    phone: 'string',
    notes: [Note.schema],
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);

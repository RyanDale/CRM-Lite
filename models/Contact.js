const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema  = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: 'string',
    email: 'string',
    phone: 'string',
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);

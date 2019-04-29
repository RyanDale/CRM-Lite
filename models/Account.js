const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Note = require('./Note');

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: 'string',
    contacts: [
        { type: Schema.Types.ObjectId, ref: 'Contact' }
    ],
    notes: [Note.schema]
});

module.exports = Account = mongoose.model('Account', AccountSchema);

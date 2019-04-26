const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: 'string',
    contacts: [
        { type: Schema.Types.ObjectId, ref: 'Contact' }
    ]
});

module.exports = Account = mongoose.model('Account', AccountSchema);

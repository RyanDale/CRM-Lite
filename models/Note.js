const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Note = mongoose.model('Note', NoteSchema);

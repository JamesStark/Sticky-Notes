var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({

    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
});

var notes = mongoose.model('notes', notesSchema);

module.exports = notes;
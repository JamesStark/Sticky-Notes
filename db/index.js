var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mahaperiyava");
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

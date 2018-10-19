var mongoose = require('mongoose');

mongoose.connect("mongodb://stark:stark145@ds135653.mlab.com:35653/stickynotes");
// mongoose.connect("MONGODB_URI");
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

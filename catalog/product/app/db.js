var mongoose = require ("mongoose");

var DB_URI = 'mongodb://moin:moin@ds229290.mlab.com:29290/learn_mongo' ; 

if(process.env.MONGO_DB_URI) {
    DB_URI = process.env.MONGO_DB_URI;
}

module.exports = function(app) {  
    mongoose.connect(DB_URI);
    var db = mongoose.connection;
};
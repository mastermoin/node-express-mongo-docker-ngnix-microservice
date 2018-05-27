var express = require ("express");
var app = express();

const PORT = 3001

require('./app/server.js')(app)
require('./app/db.js')(app)

app.get('/', function(req, res){
    res.send("Product Service is running....");
});

app.listen(PORT);

console.log("Product Service is running on Port " + PORT);
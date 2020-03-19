var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.use(express.static('files'));

serv.listen(process.env.PORT);
console.log("Server is listening on port " + process.env.PORT);

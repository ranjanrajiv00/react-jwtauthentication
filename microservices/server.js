var express = require('express');
var app = express();
var cors = require('cors');

var port = 5050;

app.use(cors());

require('./config/express')(app);
require('./config/route')(app);

app.listen(port);

console.log('microservices is started on port ' + port);
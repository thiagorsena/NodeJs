var express = require('express');
var produtosRouter = require('./routes/produtosRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var url = 'mongodb://user:pass@ds018268.mlab.com:18268/dbname'

var db = mongoose.connect(url);

var app = express();
app.use(bodyParser.json());

app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000...');
});

app.use('/produtos',produtosRouter);       
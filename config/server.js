var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//Sem definir essa rota padrão o código funciona
app.set('views', '/app/views');

module.exports = app;
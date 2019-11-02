var app = require('./config/server');


//A rota modularizada não funciona (checar server.js
var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);
var rotaFormulario = require('./app/routes/formulario_inclusão_noticia');
//var rotaHome = require('./app/routes/home');
//rotaHome(app);

app.listen(3000, function(){
    console.log("Server UP");
});

//Sem modularizar a rota funciona perfeitamente
app.get('/', function(req,res){
    res.render("index");
});
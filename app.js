var app = require('./config/server');

//rotas
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormulario = require('./app/routes/formulario_inclusão_noticia')(app);
var rotaHome = require('./app/routes/home');
rotaHome(app);

//porta
app.listen(3000, function(){
    console.log("Server UP");
});
//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
    app.get('/noticias', function(req,res){
        var connection = app.config.dbConnection;
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias.ejs", {noticias : result});

       /* connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias.ejs", {noticias : result});
        });*/
        //res.render("noticias/noticia.ejs");
    });
})}
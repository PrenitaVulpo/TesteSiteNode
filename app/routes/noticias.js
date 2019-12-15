var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
    var connection = dbConnection();
    app.get('/noticia', function(req,res){

        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticia.ejs", {noticias : result});
        });
        //res.render("noticias/noticia.ejs");
    });
};
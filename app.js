var app = require('./config/server');


//porta
app.listen(3000 || process.env.PORT, function(){
    console.log("Server UP");
});
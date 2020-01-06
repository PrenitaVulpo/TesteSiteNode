var app = require('./config/server');


//porta
app.listen(process.env.PORT || 3000, function(){
    console.log("Server UP");
});
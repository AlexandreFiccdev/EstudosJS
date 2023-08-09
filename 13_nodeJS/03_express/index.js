let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('primeira Rota com Express');
});

app.get('/teste', function(req, res){
    res.send('testando rota');
});

app.listen(3000, function(){
    console.log("A aplicação esta funcionando na porta 3000");
})
const express = require('express');

const app = express();
// middleware integrado
app.use(express.json());


app.use(function(req, res, next){
    console.log("Data", new Date());
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);

    console.log("Data: ", new Date());
    next();
});

app.get("/", function(req, res){
    res.send('Ola');
}
)

app.post("/", function( req, res){
    console.log(req.body);
    res.status(201). send ("Criado com sucesso");

})

app.put("/", function(req, res){
    response.json({ status: "200", message: "sucesso"});
});

app.delete("/", function(req, resp){
    throw new Exception();
});
// middleware de erro
app.use(function(error, req, res, next){
    res.status(400).send("Deu Ruim!");
})

app.listen(3000, function(){
    console.log("API está ON!");
});


module.exports = app;
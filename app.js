const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const createError = require("http-errors");

//=======================================================

//Configurando o estilo da pagina
app.use(express.static(path.join(__dirname,"public")));


//=======================================================

//Setup view engine
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

//=======================================================

app.get("/", (req, res, next) => {

    res.render("index", {
        title:"Meu primeiro servidor Express",
        version: "0.0.0"
    });

});

//=======================================================

app.get("/curriculo", (req, res, next) => {

    //O que é isso ? pediu para eu colocar no router se ele ainda tem que permanecer aqui??
    const curriculoData = curriculoController.getData();
    res.render("curriculo", curriculoData);

});

//=======================================================

// 404
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

//=======================================================

app.listen(port, err => {
    console.log(`Servidor esta escutando na porta ${port}`);
});
//=========Requisitando Express===========//
const express = require('express');
//========Configurando a porta 3000============//
const port = 3000;
//=========Acessando os comandos do Express===========//
const app = express();
//=========Requisitando a engine de view===========//
const path = require('path');
//==========Importando o tratador de erros==========//
//Usado para quem acessa paginas inexistentes//
const createError = require('http-errors');

//importando o controller para o app.js
const curriculoController = require("./controllers/curriculo-controller");

//=======================================================

//Configurando o estilo da pagina
app.use(express.static(path.join(__dirname,'public')));
/*Repare que utilizamos o comando use do Express, não o set. 
Isso porque, agora, estamos utilizando um middleware, 
uma função que o Express pode utilizar para executar ações, 
não uma configuração do próprio framework. */



//Setando a engine de visualização (view engine)
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

//=======================================================

// app.get("/", (req, res, next) => {

//     res.render("index", {
//         title:"Meu primeiro servidor Express",
//         version: "0.0.0"
//     });

// });

//=======================================================

// app.get("/curriculo", (req, res, next) => {

//     const curriculoData = curriculoController.getData();
//     res.render("curriculo", curriculoData);

// });

//=========Importando as rotas===============//
const indexRouter = require('./routes/index');
const curriculoRouter = require('./routes/curriculo');

//===========Setando e usando as rotas============//
app.get('/', indexRouter);
app.get('/curriculo', curriculoRouter);


//==========Tratamento de erros=============//
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

//========Mensagem de retorno de funcionamento da porta=============//

app.listen(port, err => {
    console.log(`Servidor esta escutando na porta ${port}`);
});
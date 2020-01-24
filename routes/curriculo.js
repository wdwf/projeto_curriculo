const express = require("express");
const router = express.Router();
const curriculoController = require("../controllers/curriculo-controller");


router.get("/curriculo", (req, res, next) => {

    //O que é isso ? pediu para eu colocar no router se ele ainda tem que permanecer aqui??
        const curriculoData = curriculoController.getData();
        res.render("curriculo", curriculoData);

});

module.exports = router; 
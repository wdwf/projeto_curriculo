const express = require("express");
const router = express.Router();
const curriculoController = require("../controllers/curriculo-controller");

router.get("/curriculo", (req, res, next) => {

    //INDEFINIDO
    const curriculoData = curriculoController.getData();
    res.render("curriculo", curriculoData);

});

module.exports = router;
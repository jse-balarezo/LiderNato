const express = require("express");

const router = express.Router();
const {
 renderMandela
} = require("../controladores/mandela.controlador");

router.get("/mandela", renderMandela);

module.exports = router;
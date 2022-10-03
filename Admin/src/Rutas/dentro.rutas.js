const express = require("express");

const router = express.Router();
const {
 renderDentro
} = require("../controladores/dentro.controlador");

router.get("/dentro", renderDentro);

module.exports = router;

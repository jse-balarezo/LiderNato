const express = require("express");

const router = express.Router();
const {
 renderFundamentos
} = require("../controladores/fundamentos.controlador");

router.get("/fundamentos", renderFundamentos);

module.exports = router;

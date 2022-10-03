const express = require("express");

const router = express.Router();
const {
 renderGates
} = require("../controladores/gates.controlador");

router.get("/gates", renderGates);

module.exports = router;
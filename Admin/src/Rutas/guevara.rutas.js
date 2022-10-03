const express = require("express");

const router = express.Router();
const {
 renderGuevara
} = require("../controladores/guevara.controlador");

router.get("/guevara", renderGuevara);

module.exports = router;
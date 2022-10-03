const express = require("express");

const router = express.Router();
const {
 renderPony
} = require("../controladores/pony.controlador");

router.get("/pony", renderPony);

module.exports = router;
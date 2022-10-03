const express = require("express");

const router = express.Router();
const {
 renderBenedicto
} = require("../controladores/benedicto.controlador");

router.get("/benedicto", renderBenedicto);

module.exports = router;
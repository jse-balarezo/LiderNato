const express = require("express");

const router = express.Router();
const {
 renderLiderazgo
} = require("../controladores/liderazgo.controlador");

router.get("/liderazgo", renderLiderazgo);

module.exports = router;

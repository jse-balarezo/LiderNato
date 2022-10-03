const express = require("express");

const router = express.Router();
const {
 renderAutoconocimiento
} = require("../controladores/autoconocimiento.controlador");

router.get("/autoconocimiento", renderAutoconocimiento);

module.exports = router;

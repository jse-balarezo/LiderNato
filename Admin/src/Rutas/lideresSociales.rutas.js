const express = require("express");

const router = express.Router();
const {
    renderlideresSociales
} = require("../controladores/lideresSociales.controlador");

router.get("/lideresSociales", renderlideresSociales);

module.exports = router;

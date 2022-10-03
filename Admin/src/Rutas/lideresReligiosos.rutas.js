const express = require("express");

const router = express.Router();
const {
    renderlideresReligiosos
} = require("../controladores/lideresReligiosos.controlador");

router.get("/lideresReligiosos", renderlideresReligiosos);

module.exports = router;

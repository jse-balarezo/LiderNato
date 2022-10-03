const express = require("express");

const router = express.Router();
const {
 renderNadella
} = require("../controladores/nadella.controlador");

router.get("/nadella", renderNadella);

module.exports = router;
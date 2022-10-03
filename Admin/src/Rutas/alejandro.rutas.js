const express = require("express");

const router = express.Router();
const {
 renderAlejandro
} = require("../controladores/alejandro.controlador");

router.get("/alejandro", renderAlejandro);

module.exports = router;

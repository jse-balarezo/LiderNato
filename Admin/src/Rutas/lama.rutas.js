const express = require("express");

const router = express.Router();
const {
 renderLama
} = require("../controladores/lama.controlador");

router.get("/lama", renderLama);

module.exports = router;
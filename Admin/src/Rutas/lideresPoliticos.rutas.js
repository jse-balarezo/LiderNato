const express = require("express");

const router = express.Router();
const {
 renderlideresPoliticos
} = require("../controladores/lideresPoliticos.controlador");

router.get("/lideresPoliticos", renderlideresPoliticos);

module.exports = router;

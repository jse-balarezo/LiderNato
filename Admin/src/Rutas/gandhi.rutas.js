const express = require("express");

const router = express.Router();
const {
 renderGandhi
} = require("../controladores/gandhi.controlador");

router.get("/gandhi", renderGandhi);

module.exports = router;
const express = require("express");

const router = express.Router();
const {
 renderGran
} = require("../controladores/gran.controlador");

router.get("/gran", renderGran);

module.exports = router;
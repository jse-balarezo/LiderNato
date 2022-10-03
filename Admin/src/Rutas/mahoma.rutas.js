const express = require("express");

const router = express.Router();
const {
 renderMahoma
} = require("../controladores/mahoma.controlador");

router.get("/mahoma", renderMahoma);

module.exports = router;
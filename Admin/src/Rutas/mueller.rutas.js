const express = require("express");

const router = express.Router();
const {
 renderMueller
} = require("../controladores/mueller.controlador");

router.get("/mueller", renderMueller);

module.exports = router;
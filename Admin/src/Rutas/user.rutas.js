const express = require("express");

const router = express.Router();
const {
  getUsers,
} = require("../controladores/usuario.controlador");

router.get("/home", renderHome);
module.exports = router;

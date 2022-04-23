const express = require('express');
const rutas = express.Router()

const {  } = require('../controladores/usuario.controlador')

rutas.get('/login', mostrar)

module.exports = rutas;

const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddContenido,addContenido,renderContenido,deleteContenido,renderEditContenido,editContenido, Perfil}=  require('../Controladores/contenido.controlador');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/agregar/:id', isLoggedIn, renderAddContenido);
router.post('/agregar/:id', isLoggedIn, addContenido);
router.get('/lista/:id', isLoggedIn, renderContenido);
router.get('/Elimnar/:id', isLoggedIn, deleteContenido);
router.get('/editar/:id', isLoggedIn, renderEditContenido);
router.post('/editar/:id', isLoggedIn, editContenido);
router.get('/Perfil/:id', isLoggedIn, Perfil)

module.exports = router; 
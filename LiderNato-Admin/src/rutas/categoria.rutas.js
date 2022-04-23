const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddCategoria,addCategoria,renderCategoria,deleteCategoria,renderEditCategoria,editCategoria, Perfil}=  require('../Controladores/categoria.controlador');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/agregar/:id', isLoggedIn, renderAddCategoria);
router.post('/agregar/:id', isLoggedIn, addCategoria);
router.get('/lista/:id', isLoggedIn, renderCategoria);
router.get('/Elimnar/:id', isLoggedIn, deleteCategoria);
router.get('/editar/:id', isLoggedIn, renderEditCategoria);
router.post('/editar/:id', isLoggedIn, editCategoria);
router.get('/Perfil/:id', isLoggedIn, Perfil)

module.exports = router; 
const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddCursos,addCursos,renderCursos,deleteCursos,renderEditCursos,editCursos, Perfil}=  require('../Controladores/cursos.controlador');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/agregar/:id', isLoggedIn, renderAddCursos);
router.post('/agregar/:id', isLoggedIn, addCursos);
router.get('/lista/:id', isLoggedIn, renderCursos);
router.get('/Elimnar/:id', isLoggedIn, deleteCursos);
router.get('/editar/:id', isLoggedIn, renderEditCursos);
router.post('/editar/:id', isLoggedIn, editCursos);
router.get('/Perfil/:id', isLoggedIn, Perfil)

module.exports = router; 
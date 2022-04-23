const usuarioCtrl = {};
const passport = require('passport')

usuarioCtrl.mostrar = (req, res) => {
    res.render('usuario/login');
};

usuarioCtrl.login = passport.authenticate('local.signin', {
    successRedirect: '/proyecto/agrgar/',
    failureRedirect: '/login',
    failureFlash: true
})

usuarioCtrl.mostrarRegistro = (req, res) => {
    res.render('usuario/registro');
};

usuarioCtrl.login = passport.authenticate('local.signin', {
    successRedirect: '/CerrarSecion/',
    failureRedirect: '/registro',
    failureFlash: true
})


usuarioCtrl.cerrar = (req, res, next) =>{
    req.logOut();
    res.redirect('/');
}

module.exports = usuarioCtrl



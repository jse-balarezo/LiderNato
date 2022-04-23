const categoriaCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

categoriaCtrl.renderAddClientes = (req, res) => {
    res.render('categoria/agregar');
};

categoriaCtrl.addCategoria = async (req, res) => {
    const id = req.params.id;
    const ids = req.user.idUsuarios
    const {username, Nombres, Direccion, Celular, telefono} = req.body;
    const nuevocategoria = {
        username,
        Nombres,
        Direccion,
        telefono,
        Celular
    };

    const nuevoDetalle = {
        clienteIdClientes: id,
        usuarioIdUsuarios: ids
    }
    await orm.categoria.create(nuevocategoria);
    await orm.detalleCategoria.create(nuevoDetalle)
    req.flash('success', 'Se Guardo Correctamente');
    res.redirect('/clientes/lista/'+ ids);
}

categoriaCtrl.renderCategoria = async (req, res) => {
    const id = req.params.id
    const categoria = await sql.query('SELECT * FROM categoria');
    res.render('Categoria/lista', {categorias});
}

categoriaCtrl.deleteCategoria = async (req, res) => {
    const id  = req.params.id;
    const IDS = req.user.idUsuarios
    await orm.detalleCategoria.destroy({ where: { clienteIdCategoria: id } })
    await orm.categoria.destroy({ where: { idCategoria: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/categoria/lista/' + IDS);
};

categoriaCtrl.renderEditCategoria = async (req, res) => {
    const id  = req.params.id;
    const categorias = await sql.query('SELECT * FROM clientes WHERE idClientes = ?', [id]);
    res.render('Clientes/editar', { categorias});
};

categoriaCtrl.editCategoria = async (req,res) => {
    const id  = req.params.id;
    const IDS = req.user.idUsuarios
    const { username, Nombres, Telefono, Direccion, Celular} = req.body; 
    const actulizarCategoria = {
        username,
        Nombres,
        Direccion,
        Telefono,
        Celular
    };
    await orm.categoria.findOne({ where: { idCategoria: id } })
    .then(categorias => {
        categorias.update(actulizarCategoria)
        req.flash('success', 'Se Actualizo Correctamente');
        res.redirect('/clientes/lista/' + IDS);
    })
}

categoriaCtrl.Perfil = async (req, res) => {
    const ids = req.user.idUsuarios
    const categoria = await sql.query("SELECT * FROM clientes where idCategoria = ?", [ids])
    const nota = await sql.query("select * from notaventas where clienteIdCategoria = ?", [ids])
    const Facturas = await sql.query("select * from facturas where clienteIdCategorias = ?", [ids])
    res.render('Categorias/Perfil',{categoria, nota, Facturas})
}

module.exports = categoriaCtrl;
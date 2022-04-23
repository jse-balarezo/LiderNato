const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "LiderNato";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})
const usuarioModelo = require('../modelos/usuario')
const categoriaModelo = require('../modelos/categoria')
const clienteModelo = require('../modelos/cliente')
const contenidoModelo = require('../modelos/contenido')
const cursosModelo = require('../modelos/cursos')
const detalle_contenidoModelo = require('../modelos/detalle_contenido')
const detalle_cursosModelo = require('../modelos/detalle_cursos')

const sequelize = new Sequelize(
  'LiderNato',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

//Relaciones 
const usuario = usuarioModelo(sequelize,Sequelize)
const categoria = categoriaModelo(sequelize,Sequelize)
const cliente = clienteModelo(sequelize,Sequelize)
const contenido = contenidoModelo(sequelize,Sequelize)
const cursos = cursosModelo(sequelize,Sequelize)
const detalle_contenido = detalle_contenidoModelo(sequelize,Sequelize)
const detalle_cursos = detalle_cursosModelo(sequelize,Sequelize)
module.exports = {
  usuario,
  categoria,
  cliente,
  contenido,
  cursos,
  detalle_contenido,
  detalle_cursos
}
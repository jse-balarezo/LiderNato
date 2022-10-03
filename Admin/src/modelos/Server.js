const express = require("express");
const cors = require("cors");
const userRouter = require("../Rutas/user.rutas");
const authRouter = require("../Rutas/auth.rutas");
const artistRouter = require("../Rutas/artist.rutas");
const artistAuthRouter = require("../Rutas/artistAuth.rutas");
const productsRouter = require("../Rutas/product.rutas");
const artistCatalogueRouter = require("../Rutas/artistCatalogue.rutas");
const cartRouter = require("../Rutas/cart.rutas");
const liderandoRouter = require("../Rutas/liderando.rutas");
const lideresSocialesRouter = require("../Rutas/lideresSociales.rutas");
const lideresPoliticosRouter = require("../Rutas/lideresPoliticos.rutas");
const lideresReligiososRouter = require("../Rutas/lideresReligiosos.rutas");
const { connectDb } = require("../ConfiguracionBaseDatos/dbConnection");
const { engine } = require("express-handlebars");

const fileUpload = require("express-fileupload");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT;
    this.paths = {
      usersPath: "/",
      authPath: "/auth",
      artistPath: "/",
      artistAuthPath: "/auth",
      artistCataloguePath: "/",
      productsPath: "/",
      cartPath: "/",
      liderandoPath: "/",
      lideresSocialesPath: "/",
      lideresPoliticosPath: "/",
      lideresReligiososPath: "/"
    };
    this.conectarDb();
    this.app.use(cors());
    this.app.engine("handlebars", engine());
    this.app.set("view engine", "handlebars");
    this.app.set("views", "src/vistas");
    /*  this.app.set('view engine','ejs') */
    //Parseo y lectura del body
    this.app.use(express.json());
    this.middlewares();
    //rutas de la app
    this.routes();
  }
  async conectarDb() {
    await connectDb();
  }
  routes() {
    this.app.use(this.paths.usersPath, userRouter);
    this.app.use(this.paths.authPath, authRouter);
    this.app.use(this.paths.artistPath, artistRouter);
    this.app.use(this.paths.artistAuthPath, artistAuthRouter);
    this.app.use(this.paths.artistCataloguePath, artistCatalogueRouter);
    this.app.use(this.paths.productsPath, productsRouter);
    this.app.use(this.paths.cartPath, cartRouter);
    this.app.use(this.paths.liderandoPath, liderandoRouter);
    this.app.use(this.paths.lideresSocialesPath, lideresSocialesRouter);
    this.app.use(this.paths.lideresPoliticosPath, lideresPoliticosRouter);
    this.app.use(this.paths.lideresPoliticosPath, lideresReligiososRouter);
  }
  listen() {
    this.app.listen(this.port);
  }
  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }
}
module.exports = Server;

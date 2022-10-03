const express = require("express");
const cors = require("cors");
const userRouter = require("../Rutas/user.rutas");
const authRouter = require("../Rutas/auth.rutas");

const productsRouter = require("../Rutas/product.rutas");

const cartRouter = require("../Rutas/cart.rutas");
const liderandoRouter = require("../Rutas/liderando.rutas");
const lideresSocialesRouter = require("../Rutas/lideresSociales.rutas");
const lideresPoliticosRouter = require("../Rutas/lideresPoliticos.rutas");
const lideresReligiososRouter = require("../Rutas/lideresReligiosos.rutas");
const liderazgoRouter = require("../Rutas/liderazgo.rutas");
const autoconocimientoRouter = require("../Rutas/autoconocimiento.rutas");
const dentroRouter = require("../Rutas/dentro.rutas");
const fundamentosRouter = require("../Rutas/fundamentos.rutas");
const alejandroRouter = require("../Rutas/alejandro.rutas");
const gandhiRouter = require("../Rutas/gandhi.rutas");
const guevaraRouter = require("../Rutas/guevara.rutas");
const mandelaRouter = require("../Rutas/mandela.rutas");
const benedictoRouter = require("../Rutas/benedicto.rutas");
const granRouter = require("../Rutas/gran.rutas");
const lamaRouter = require("../Rutas/lama.rutas");
const mahomaRouter = require("../Rutas/mahoma.rutas");
const gatesRouter = require("../Rutas/gates.rutas");
const muellerRouter = require("../Rutas/mueller.rutas");
const nadellaRouter = require("../Rutas/nadella.rutas");
const ponyRouter = require("../Rutas/pony.rutas");
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
      
      productsPath: "/",
      cartPath: "/",
      liderandoPath: "/",
      lideresSocialesPath: "/",
      lideresPoliticosPath: "/",
      lideresReligiososPath: "/",
      liderazgoPath: "/",
      autoconocimientoPath: "/",
      dentroPath: "/",
      fundamentosPath: "/",
      alejandroPath: "/",
      gandhiPath: "/",
      guevaraPath: "/",
      mandelaPath: "/",
      benedictoPath: "/",
      granPath: "/",
      lamaPath: "/",
      mahomaPath: "/",
      gatesPath: "/",
      muellerPath: "/",
      nadellaPath: "/",
      ponyPath: "/",
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
    
    this.app.use(this.paths.productsPath, productsRouter);
    this.app.use(this.paths.cartPath, cartRouter);
    //menus
    this.app.use(this.paths.liderandoPath, liderandoRouter);
    this.app.use(this.paths.lideresSocialesPath, lideresSocialesRouter);
    this.app.use(this.paths.lideresPoliticosPath, lideresPoliticosRouter);
    this.app.use(this.paths.lideresPoliticosPath, lideresReligiososRouter);
    //liderando
    this.app.use(this.paths.liderazgoPath, liderazgoRouter);
    this.app.use(this.paths.autoconocimientoPath, autoconocimientoRouter);
    this.app.use(this.paths.dentroPath, dentroRouter);
    this.app.use(this.paths.fundamentosPath, fundamentosRouter);
    //Politicos
    this.app.use(this.paths.alejandroPath, alejandroRouter);
    this.app.use(this.paths.gandhiPath, gandhiRouter);
    this.app.use(this.paths.guevaraPath, guevaraRouter);
    this.app.use(this.paths.mandelaPath, mandelaRouter);
    //Religiosos
    this.app.use(this.paths.benedictoPath, benedictoRouter);
    this.app.use(this.paths.granPath, granRouter);
    this.app.use(this.paths.lamaPath, lamaRouter);
    this.app.use(this.paths.mahomaPath, mahomaRouter);
    //Sociales
    this.app.use(this.paths.gatesPath, gatesRouter);
    this.app.use(this.paths.muellerPath, muellerRouter);
    this.app.use(this.paths.nadellaPath, nadellaRouter);
    this.app.use(this.paths.ponyPath, ponyRouter);
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

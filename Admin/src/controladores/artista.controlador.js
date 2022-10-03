const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Artist = require("../modelos/Artist").Artist;
const bcrypt = require("bcrypt");
const artistaCtl = {};
const saltRounds = 10;

artistaCtl.renderArtistRegisterView = async (req, res) => {
  res.render("artistsRegister");
};

artistaCtl.mostrarArtistas = async (req, res) => {
  try {
    const artists = await dataSource.getRepository(Artist).find();
    res.json(artists);
  } catch (error) {
    console.log(error);
  }
};

artistaCtl.crearArtista = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      name,
      last_name,
      artist_name,
      gender_music,
      birth_place,
      description,
    } = req.body;
    dataSource.getRepository(Artist).create(req.body);
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const results = await dataSource.getRepository(Artist).save({
        username,
        email,
        password: hash,
        name,
        last_name,
        artist_name,
        gender_music,
        birth_place,
        description,
      });
      return res.render("thanksForRegister");
    });
  } catch (error) {
    console.log(error);
  }
};

artistaCtl.actualizar = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      name,
      last_name,
      artist_name,
      gender_music,
      birth_place,
      description,
    } = req.body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const results = await dataSource.getRepository(Artist).update({
        username,
        email,
        password: hash,
        name,
        last_name,
        artist_name,
        gender_music,
        birth_place,
        description,
      });
      return res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
};

artistaCtl.borrar = async (req, res) => {
  const { artistId } = req.body;
  try {
    const artistDeleted = dataSource.getRepository(Artist).delete({
      where: {
        id: artistId,
      },
    });
    res.json({
      artistDeleted,
    });
  } catch (error) {
    console.log(error, "deleteArtist");
  }
};
module.exports = artistaCtl;

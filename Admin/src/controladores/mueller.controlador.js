const muellerCtl = {};
muellerCtl.renderMueller = (req, res) => {
  res.render("LideresSociales/mueller");
};

muellerCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = muellerCtl;
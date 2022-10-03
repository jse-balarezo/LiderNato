const guevaraCtl = {};
guevaraCtl.renderGuevara = (req, res) => {
  res.render("LideresPoliticos/guevara");
};

guevaraCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = guevaraCtl;
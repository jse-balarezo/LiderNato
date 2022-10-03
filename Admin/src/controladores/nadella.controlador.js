const nadellaCtl = {};
nadellaCtl.renderNadella = (req, res) => {
  res.render("LideresSociales/nadella");
};

nadellaCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = nadellaCtl;
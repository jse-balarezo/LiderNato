const gatesCtl = {};
gatesCtl.renderGates = (req, res) => {
  res.render("LideresSociales/gates");
};

gatesCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = gatesCtl;
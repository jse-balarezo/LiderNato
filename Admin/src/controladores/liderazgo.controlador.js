const liderazgoCtl = {};
liderazgoCtl.renderLiderazgo = (req, res) => {
  res.render("Liderando/liderazgo");
};

liderazgoCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = liderazgoCtl;

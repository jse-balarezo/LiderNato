const ponyCtl = {};
ponyCtl.renderPony = (req, res) => {
  res.render("LideresSociales/pony");
};

ponyCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ponyCtl;
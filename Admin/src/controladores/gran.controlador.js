const granCtl = {};
granCtl.renderGran = (req, res) => {
  res.render("LideresReligiosos/gran");
};

granCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = granCtl;
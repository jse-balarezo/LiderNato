const lamaCtl = {};
lamaCtl.renderLama = (req, res) => {
  res.render("LideresReligiosos/lama");
};

lamaCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = lamaCtl;
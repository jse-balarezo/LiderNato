const benedictoCtl = {};
benedictoCtl.renderBenedicto = (req, res) => {
  res.render("LideresReligiosos/benedicto");
};

benedictoCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = benedictoCtl;
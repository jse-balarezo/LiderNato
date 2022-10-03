const dentroCtl = {};
dentroCtl.renderDentro = (req, res) => {
  res.render("Liderando/dentro");
};

dentroCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dentroCtl;

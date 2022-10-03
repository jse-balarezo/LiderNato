const fundamentosCtl = {};
fundamentosCtl.renderFundamentos = (req, res) => {
  res.render("Liderando/fundamentos");
};

fundamentosCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = fundamentosCtl;

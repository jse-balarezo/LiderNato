const autoconocimientoCtl = {};
autoconocimientoCtl.renderAutoconocimiento = (req, res) => {
  res.render("Liderando/autoconocimiento");
};

autoconocimientoCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = autoconocimientoCtl;

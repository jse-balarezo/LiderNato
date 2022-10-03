const lideresPoliticosCtl = {};
lideresPoliticosCtl.renderlideresPoliticos= (req, res) => {
  res.render("menus/lideresPoliticos");
};

lideresPoliticosCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = lideresPoliticosCtl;

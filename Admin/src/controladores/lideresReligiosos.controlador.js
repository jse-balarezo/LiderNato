const lideresReligiososCtl = {};
lideresReligiososCtl.renderlideresReligiosos = (req, res) => {
  res.render("menus/lideresReligiosos");
};

lideresReligiososCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = lideresReligiososCtl;

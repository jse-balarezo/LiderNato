const gandhiCtl = {};
gandhiCtl.renderGandhi = (req, res) => {
  res.render("LideresPoliticos/gandhi");
};

gandhiCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = gandhiCtl;
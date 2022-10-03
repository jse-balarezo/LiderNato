const mandelaCtl = {};
mandelaCtl.renderMandela = (req, res) => {
  res.render("LideresPoliticos/mandela");
};

mandelaCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mandelaCtl;
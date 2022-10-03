const User = require("../modelos/User").User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const userCtl = {};
userCtl.renderHome = (req, res) => {
  res.render("/home");
};

userCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};



module.exports = userCtl;

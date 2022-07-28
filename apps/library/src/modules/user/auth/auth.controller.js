const { UserAuthService } = require("./auth.service");

const login = (req, res) => {
  const result = UserAuthService.login();
  return res.json(result);
};

module.exports.UserAuthController = { login };

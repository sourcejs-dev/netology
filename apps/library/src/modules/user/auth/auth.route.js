const { Router } = require("express");
const { UserAuthController } = require("./auth.controller");

const router = Router();

router.post("/user/login", UserAuthController.login);

module.exports = router;

const { Router } = require('express');
const passport = require('passport');
const { UserAuthController } = require('@modules/user/auth/auth.controller');
const { isAuth } = require('@middlewares/isAuth.middleware');

const router = Router();

router.get('/user/login', UserAuthController.getPageLogin);
router.get('/user/signup', UserAuthController.getPageSignUp);
router.post(
	'/user/login',
	passport.authenticate('local', { failureRedirect: '/api/user/login' }),
	UserAuthController.login
);
router.post('/user/signup', UserAuthController.signup);

module.exports = router;

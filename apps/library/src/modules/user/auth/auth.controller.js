const { UserAuthService } = require('./auth.service');

const getPageLogin = (req, res) =>
	res.render('user/login', { title: 'Авторизация' });
const getPageSignUp = (req, res) =>
	res.render('user/signup', { title: 'Регистрация' });

const login = (req, res) => res.redirect('/api/user/me');

const signup = async (req, res) => {
	await UserAuthService.signup(req.body);
	return res.redirect('/api/user/login');
};

module.exports.UserAuthController = {
	getPageLogin,
	getPageSignUp,
	login,
	signup,
};

const ApiError = require('@modules/api-error');
const { UserService } = require('@modules/user/user.service');

const login = () => ({ id: 1, mail: 'test@mail.ru' });
const signup = async (data) => {
	const { username: login, password } = data;

	if (!login || !password) throw ApiError.badRequest('Заполните все поля');

	const user = await UserService.findByLogin(login).catch(() => false);

	if (user) throw ApiError.forbiden('Такой пользователь уже зарегистрирован');

	await UserService.create({ login, password });

	return true;
};

module.exports.UserAuthService = {
	login,
	signup,
};

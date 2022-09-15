const ApiError = require('@modules/api-error');

class CreateUserDTO {
	constructor({ login, password }) {
		if (!login) throw ApiError.badRequest('Отсутствует параметр Логин');
		if (!password) throw ApiError.badRequest('Отсутствует параметр Пароль');

		this.login = login;
		this.password = password;
	}
}

module.exports.CreateUserDTO = CreateUserDTO;

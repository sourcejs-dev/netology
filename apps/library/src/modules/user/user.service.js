const ApiError = require('@modules/api-error');
const { CreateUserDTO } = require('./dtos/create.dto');
const { UserRepository } = require('./user.repository');

const findByLogin = async (login) => {
	if (!login) throw Error('Отсутствует параметр login');

	const item = await UserRepository.findByLogin(login);

	if (!item) throw ApiError.notFound('Пользователь с таким логином не найден');

	return item;
};

const findById = async (id) => {
	if (!id) throw Error('Отсутствует параметр id');

	const item = await UserRepository.findById(id);

	if (!item) throw ApiError.notFound('Пользователь с таким id не найден');

	return item;
};

const create = async (data) => {
	const dto = new CreateUserDTO(data);
	const item = await UserRepository.create(dto);

	return item;
};

module.exports.UserService = { findByLogin, findById, create };

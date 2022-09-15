const { unlink } = require('fs').promises;
const ApiError = require('@modules/api-error');
const { BookRepository } = require('./book.repository');
const { CreateBookDTO } = require('./dtos/create.dto');

const findAll = () => BookRepository.findAll();
const create = async (data) => {
	const dto = new CreateBookDTO(data);
	const result = await BookRepository.create(dto);

	return result;
};
const findById = async (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	const result = await BookRepository.findById(id);

	if (!result) throw ApiError.notFound('Такой книги не существует');

	return result;
};
const updateById = async (data) => {
	const { id, ...rest } = data;
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	await findById(id);

	let status = false;
	Object.keys(rest).forEach((item) => {
		if (rest[item] && rest[item].length) status = true;
	});

	if (!status)
		throw ApiError.badRequest(
			'Передайте хотя бы 1 параметр для обновление сущности'
		);

	const result = await BookRepository.updateById(data);

	return result;
};
const destroyById = async (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	const item = await findById(id);
	const result = await BookRepository.destroyById(id);

	await unlink(`${pathRoot}/public/images/${item.fileBook}`).catch(() =>
		console.log('Файл не существует или указана некорректаная директория')
	);

	return result;
};
const downloadById = async (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	const item = await findById(id);

	if (!item.fileBook)
		throw ApiError.badRequest('У данного объекта отсутствует изображение');

	return `src/public/images/${item.fileBook}`;
};

module.exports.BookService = {
	findAll,
	create,
	findById,
	updateById,
	destroyById,
	downloadById,
};

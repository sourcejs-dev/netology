const ApiError = require('@modules/api-error');
const { BookRepository } = require('./book.repository');
const { CreateBookDTO } = require('./dtos/create.dto');

const findAll = () => BookRepository.findAll();
const create = (data) => {
	const dto = new CreateBookDTO(data);
	const result = BookRepository.create(dto);

	return result;
};
const findById = (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	const result = BookRepository.findById(id);

	if (!result) throw ApiError.notFound('Такой книги не существует');

	return result;
};
const updateById = (data) => {
	const { id, ...rest } = data;
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	findById(id);

	let status = false;
	Object.keys(rest).forEach((item) => {
		if (rest[item] && rest[item].length) status = true;
	});

	if (!status)
		throw ApiError.badRequest(
			'Передайте хотя бы 1 параметр для обновление сущности'
		);

	const result = BookRepository.updateById(data);

	return result;
};
const destroyById = (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	findById(id);

	const result = BookRepository.destroyById(id);

	return result;
};
const downloadById = (id) => {
	if (!id) throw ApiError.badRequest('Отсутствует параметр id');

	const item = findById(id);

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

const ApiError = require('@modules/api-error');

class CreateBookDTO {
	constructor({
		title,
		description,
		authors,
		favorite,
		fileCover,
		fileName,
		fileBook,
	}) {
		if (!title) throw ApiError.badRequest('Отсутствует Заголовок');
		if (!description) throw ApiError.badRequest('Отсутствует Описание');
		if (!authors) throw ApiError.badRequest('Отсутствуют Авторы');
		if (!fileBook) throw ApiError.badRequest('Отсутствует параметр fileBook');
		if (!fileName) throw ApiError.badRequest('Отсутствует параметр fileName');

		if (
			typeof title !== 'string' ||
			typeof description !== 'string' ||
			typeof authors !== 'string' ||
			typeof fileCover !== 'string' ||
			typeof fileName !== 'string'
		)
			throw ApiError('Параметры имеют некорректный тип данных');

		this.title = title;
		this.description = description;
		this.authors = authors;
		this.favorite = favorite || false;
		this.fileCover = fileCover || null;
		this.fileName = fileName;
		this.fileBook = fileBook || null;
	}
}

module.exports.CreateBookDTO = CreateBookDTO;

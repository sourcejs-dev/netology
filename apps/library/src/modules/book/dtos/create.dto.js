const { v4: uuidv4 } = require('uuid');
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
		if (!title) throw ApiError.badRequest('Отсутствует параметр title');
		if (!description)
			throw ApiError.badRequest('Отсутствует параметр description');
		if (!authors) throw ApiError.badRequest('Отсутствует параметр authors');
		if (!favorite) throw ApiError.badRequest('Отсутствует параметр favorite');
		if (!fileCover) throw ApiError.badRequest('Отсутствует параметр fileCover');
		if (!fileBook) throw ApiError.badRequest('Отсутствует параметр fileBook');
		if (!fileName) throw ApiError.badRequest('Отсутствует параметр fileName');

		if (
			typeof title !== 'string' ||
			typeof description !== 'string' ||
			typeof authors !== 'string' ||
			typeof fileCover !== 'string' ||
			typeof fileName !== 'string'
		)
			throw ApiError.badRequest('Параметры имеют некорректный тип данных');

		this.id = uuidv4();
		this.title = title;
		this.description = description;
		this.authors = authors;
		this.favorite = favorite;
		this.fileCover = fileCover;
		this.fileName = fileName;
		this.fileBook = fileBook || null;
	}
}

module.exports.CreateBookDTO = CreateBookDTO;

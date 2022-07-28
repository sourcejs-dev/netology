const books = [];

const findAll = () => books;
const create = (data) => {
	books.push(data);
	return data;
};
const findById = (id) => {
	const index = books.findIndex((item) => item.id === id);

	if (index === -1) return null;

	return books[index];
};
const updateById = (data) => {
	const { id, title, description, authors, favorite, fileCover, fileName } =
		data;
	const item = books.filter((el) => el.id === id).pop();

	if (title) item.title = title;
	if (description) item.description = description;
	if (authors) item.authors = authors;
	if (favorite) item.favorite = favorite;
	if (fileCover) item.fileCover = fileCover;
	if (fileName) item.fileName = fileName;

	return item;
};
const destroyById = (id) => {
	const index = findById(id);
	books.splice(index, 1);

	return true;
};

module.exports.BookRepository = {
	findAll,
	create,
	findById,
	updateById,
	destroyById,
};

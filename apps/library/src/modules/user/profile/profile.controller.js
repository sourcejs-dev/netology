const { BookService } = require('@modules/book/book.service');

const getPageProfile = (req, res) =>
	res.render('user/profile', { title: 'Профиль', user: req.user });

const getPageBooks = async (req, res) => {
	const books = await BookService.findAll();
	return res.render('book/index', { title: 'Книги', books });
};

const getPageBookById = async (req, res) => {
	const { id } = req.params;
	const book = await BookService.findById(id);
	return res.render('book/view', { title: book.title, book });
};

const getPageUpdateBookById = async (req, res) => {
	const { id } = req.params;
	const book = await BookService.findById(id);
	return res.render('book/update', { title: `Обновление ${book.title}`, book });
};

const getPageCreateBook = (req, res) =>
	res.render('book/create', { title: 'Добавить книгу' });

module.exports.UserProfileController = {
	getPageProfile,
	getPageBooks,
	getPageBookById,
	getPageUpdateBookById,
	getPageCreateBook,
};

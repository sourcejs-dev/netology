const { BookService } = require('./book.service');

const findAll = (req, res) => {
	const result = BookService.findAll();
	return res.json(result);
};
const create = (req, res) => {
	const data = { ...req.body };

	if (req.file) {
		data.fileBook = req.file.filename;
	}

	const result = BookService.create(data);
	return res.status(201).json(result);
};
const findById = (req, res) => {
	const { id } = req.params;
	const result = BookService.findById(id);
	return res.json(result);
};
const updateById = (req, res) => {
	const { id } = req.params;
	const result = BookService.updateById({ ...req.body, id });
	return res.json(result);
};
const destroyById = (req, res) => {
	const { id } = req.params;
	BookService.destroyById(id);
	return res.send('ok');
};
const downloadById = (req, res) => {
	const { id } = req.params;
	const result = BookService.downloadById(id);
	return res.download(result);
};

module.exports.BookController = {
	findAll,
	create,
	findById,
	updateById,
	destroyById,
	downloadById,
};

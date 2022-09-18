const { BookService } = require('./book.service');

const findAll = async (req, res) => {
	const result = await BookService.findAll();
	return res.json(result);
};
const create = async (req, res) => {
	const data = { ...req.body };

	if (req.file) {
		data.fileName = req.file.filename.split('.')[0];
		data.fileBook = req.file.filename;
		data.fileCover = req.file.filename;
	}

	const result = await BookService.create(data);
	return res.status(201).json(result);
};

const findById = async (req, res) => {
	const { id } = req.params;
	const result = await BookService.findById(id);
	return res.json(result);
};
const updateById = async (req, res) => {
	const data = { ...req.body };
	if (req.file) {
		data.file = {};
		data.file.fileName = req.file.filename.split('.')[0];
		data.file.fileBook = req.file.filename;
	}
	const { id } = req.params;
	data.id = id;

	const result = await BookService.updateById(data);
	return res.json(result);
};
const destroyById = async (req, res) => {
	const { id } = req.params;
	await BookService.destroyById(id);
	return res.send('ok');
};
const downloadById = async (req, res) => {
	const { id } = req.params;
	const result = await BookService.downloadById(id);
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

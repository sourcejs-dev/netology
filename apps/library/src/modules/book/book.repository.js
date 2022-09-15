const Book = require('@models/Book');

const findAll = () => Book.find();
const create = (data) => Book.create(data);
const findById = (id) => Book.findOne({ _id: id });
const updateById = async (data) => {
	const { id: _id, ...update } = data;
	const el = await Book.findOneAndUpdate({ _id }, update);

	return el;
};
const destroyById = (id) => Book.findOneAndRemove({ _id: id });

module.exports.BookRepository = {
	findAll,
	create,
	findById,
	updateById,
	destroyById,
};

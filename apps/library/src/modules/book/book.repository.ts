const Book = require('@models/Book');

interface ICreate {
	title: string;
	description: string;
	authors: string;
	favorite: boolean;
	fileCover: string | null;
	fileName: string;
	fileBook: string | null;
}

interface IUpdate {
	id: number;
	title?: string;
	description?: string;
	authors?: string;
	favorite?: boolean;
	fileCover?: string | null;
	fileName?: string;
	fileBook?: string | null;
}

class BookRepository {
	findAll = () => Book.find();

	create = (data: ICreate) => Book.create(data);

	findById = (id: number) => Book.findOne({ _id: id });

	updateById = async (data: IUpdate) => {
		const { id: _id, ...update } = data;
		const el = await Book.findOneAndUpdate({ _id }, update, {
			returnOriginal: false,
		});

		return el;
	};

	destroyById = (id: number) => Book.findOneAndRemove({ _id: id });
}

// const findAll = () => Book.find();
// const create = (data) => Book.create(data);
// const findById = (id) => Book.findOne({ _id: id });
// const updateById = async (data) => {
// 	const { id: _id, ...update } = data;
// 	const el = await Book.findOneAndUpdate({ _id }, update, {
// 		returnOriginal: false,
// 	});

// 	return el;
// };
// const destroyById = (id) => Book.findOneAndRemove({ _id: id });

// module.exports.BookRepository = {
// 	findAll,
// 	create,
// 	findById,
// 	updateById,
// 	destroyById,
// };

const { Schema, model } = require('mongoose');

const Book = new Schema(
	{
		login: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ collection: 'User' }
);

module.exports = model('User', Book);

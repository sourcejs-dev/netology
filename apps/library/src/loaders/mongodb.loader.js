require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async () => {
	// Docker
	// await mongoose
	// 	.connect('mongodb://root:example@localhost:27017/admin')
	// 	.then(() => console.log('БД успешно подключено'))
	// 	.catch((e) => console.log(`Ошибка при подключений к БД: ${e.stack}`));

	// Atlas
	await mongoose
		.connect(process.env.MONGO_URL)
		.then(() => console.log('БД успешно подключено'))
		.catch((e) => console.log(`Ошибка при подключений к БД: ${e.stack}`));
};

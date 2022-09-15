const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
	destination: (ctx, file, cb) => {
		cb(null, 'src/public/images');
	},
	filename: (ctx, file, cb) => {
		const extension = path.extname(file.originalname);
		cb(null, `${uuidv4()}${extension}`);
	},
});

module.exports = multer({ storage });

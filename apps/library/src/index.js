require('module-alias/register');
const path = require('path');
const expressLoader = require('@loaders/express.loader');
const mongodbLoader = require('@loaders/mongodb.loader');

global.pathRoot = path.resolve(__dirname);

const bootstrap = async () => {
	expressLoader();
	mongodbLoader();
};

bootstrap();

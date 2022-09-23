require('module-alias/register');
const variablesLoader = require('@loaders/variables.loader');
const expressLoader = require('@loaders/express.loader');
const mongodbLoader = require('@loaders/mongodb.loader');

const bootstrap = async () => {
	variablesLoader();
	expressLoader();
	mongodbLoader();
};

bootstrap();

require('module-alias/register');
const express = require('express');
const { errorHandler } = require('@middlewares/error.middleware');

const app = express();

app
	.use(express.json())
	.use('/api', require('./routes'))
	.use(errorHandler)
	.listen(8080, () => console.log('Server is start porn 8080'));

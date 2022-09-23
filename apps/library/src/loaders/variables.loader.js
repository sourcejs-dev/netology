const path = require('path');

module.exports = () => {
	global.PATH_ROOT = `${path.resolve(__dirname).split('src')[0]}src`;
	global.PORT_SERVER = 8080;
};

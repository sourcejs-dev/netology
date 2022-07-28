const recursive = require('recursive-readdir');
const { Router } = require('express');

const router = Router();
const dir = 'src/modules';

const dynamicRequire = async () => {
	const dirs = await recursive(dir);

	dirs.forEach((res) => {
		if (res.includes('route')) {
			const path = `@modules${res.split(`src\\modules`).pop()}`
				.split('\\')
				.join('/');
			router.use(require(path));
		}
	});
};

dynamicRequire();

module.exports = router;

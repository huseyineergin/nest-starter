/** @type {import('lint-staged').Configuration} */
export default {
	"*.{mjs,ts,json}": ["biome check --write"],
	"*.yaml": ["prettier --write"],
};

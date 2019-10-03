const postcss = require('postcss');
const config = require('./config');

const transformAtRules = require('./lib/transform-at-rules');
const processCssVars = require('./lib/process-css-vars');
const processMedia = require('./lib/process-media');

const plugin = postcss.plugin('slatecss', function(options) {
	var conf = config.load('slate.config.js');

	return postcss([
		transformAtRules(),
		processCssVars(conf),
		processMedia(conf)
	]);
})

module.exports = plugin;
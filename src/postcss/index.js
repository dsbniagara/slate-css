const postcss = require('postcss');
const config = require('./config');

const transformAtRules = require('./lib/transform-at-rules');
const processCssVars = require('./lib/process-css-vars');
const processMedia = require('./lib/process-media');

const plugin = postcss.plugin('@dsbn/slate-css', function(options) {
	var conf = config.load('slate.config.js');
	console.log("@dsbn/slate-css",conf);
	return postcss([
		transformAtRules(conf),
		processCssVars(conf),
		processMedia(conf)
	]);
})

module.exports = plugin;
const config = require('./config');
const postcss = require('postcss');

const vars   = require('postcss-simple-vars');
const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const forLoop = require('postcss-for');

const transformAtRules = require('./lib/transform-at-rules');

const plugin = postcss.plugin('@dsbn/slate-css', function(options) {
	var configuration = config.load('slate.config.js');
	
	var plugins = [
		transformAtRules(),
		nested(),
		mixins(),
		forLoop(),
		vars({variables: configuration})
	];
	return postcss(plugins);
})

module.exports = plugin;